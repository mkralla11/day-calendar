import {mapObjIndexed} from 'ramda';

function setDataIdFromKey(data){
  return mapObjIndexed(
    (item, id)=>{
      return {...item, id};
    }
  , data);
}


export function eventsNormalizr(data){
  return setDataIdFromKey(data);
}