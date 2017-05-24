import layOutDay from 'utils/layOutDay';
import {path, values} from 'ramda';
import { createSelector } from 'reselect';
import {selectEventsContainerWidth} from 'selectors/eventsContainer';

const selectEvents = path(['events', 'events']);


export function makeSelectCalculatedEventPositions(){
  return createSelector(
   selectEvents,
   selectEventsContainerWidth,
    (events, containerWidth) => {
      events = values(events);
      return layOutDay(events, {containerWidth});
    }
  );
}