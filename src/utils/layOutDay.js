import {sortWith, compose, max, keys, ascend, prop, values, lensProp, set, map, flatten, reduce} from 'ramda';
import {reduceIndexed, mapIndexed} from 'utils/general';

/**
* Lays out events for a single day
*
* @param array  events   An array of event objects. Each event object consists of a start and end
*                        time  (measured in minutes) from 9am, as well as a unique id. The
*                        start and end time of each event will be [0, 720]. The start time will 
*                        be less than the end time.
*
* @return array  An array of event objects that has the width, the left and top positions set, in addition to the id,
*                start and end time. The object should be laid out so that there are no overlapping
*                events. NOTE: additional keys for convenience: top, height. This function should handle all general dimensions
*/ 
export default function layOutDay(events, options){
  return compose(
    setOffsetTopAndHeightForEvents,
    setWidthsAndLeftOffsetsForColumnsInBuckets(options),
    groupIntoColumns,
    values,
    reduceIntoCollisionBuckets,
    // make the next functional process deterministic by sorting by start first
    sortWith([
      ascend(prop('start')),
    ])
  )(events)
}





function reduceIntoCollisionBuckets(events){
  let currentMaxEnd = -1;
  let currentBucketIdx = 0;
  const res = reduceIndexed((buckets, event, i)=>{
    const {start, end} = event;
    // determine if the event starts after the current max event end time
    if(start > currentMaxEnd){
      // store current bucket idx being created for O(1) lookup time
      currentBucketIdx = i;
      // Due to the fact that the start was after the current max,
      // start a new bucket of collisions.
      buckets = {...buckets, [i]: [event]}
    }
    else{
      // use object instead of array for buckets reduction 
      // for easy merge without using indexOf and slice.
      keys(buckets)
      buckets = {...buckets, [currentBucketIdx]: [...buckets[currentBucketIdx], event]}
    }
    // set the currentMaxEnd based on the max of the current event
    // and the current max end
    currentMaxEnd = max(end, currentMaxEnd);
    return buckets;
  }, {}, events);

  return values(res);
}



function groupIntoColumns(buckets){
  return map((events)=>{
    const {columns} = reduce(({columnEnds, columns}, event)=>{
      let targetColumnIdx = columnEnds.length;
      mapIndexed((columnEnd, i)=>{
        if(columnEnd < event.start){
          // it can fit in the column!
          targetColumnIdx = i;
        }
      }, columnEnds);

      // get or create a column at index
      columns[targetColumnIdx] = columns[targetColumnIdx] || [];
      // store event in column
      columns[targetColumnIdx].push(event);
      columnEnds[targetColumnIdx] = event.end;
      return {columns, columnEnds};
    }, {columnEnds: [-Infinity], columns: []}, events);
    return columns;
  }, buckets);
}

const widthLens = lensProp('width')
const leftLens = lensProp('left')
// Mobility of an application always needs to be a fore-thought,
// not something that you just skip over.
// To accommodate, allow this function to take the current container width
function setWidthsAndLeftOffsetsForColumnsInBuckets({containerWidth=600}={}){
  // create a closure to configure this function
  return (buckets)=>{
    return compose(
      flatten,
      map((columns)=>{
        const width = containerWidth / columns.length;
        return mapIndexed(
          compose(
            map(set(widthLens, width)),
            (column, i)=>{
              const left = i * width;
              return map(set(leftLens, left), column);
            } 
          )
        , columns)
      })
    )(buckets)
  }
}

function setOffsetTopAndHeightForEvents(events){
  return map((event)=>{
    return {...event, top: event.start, height: event.end - event.start}
  }, events)
}