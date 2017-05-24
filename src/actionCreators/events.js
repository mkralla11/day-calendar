import {
  getOrFetchEvents,
  getOrFetchEventsSuccess,
  getOrFetchEventsError
} from 'actions/events';
import api from 'services/api';
import {eventsNormalizr} from 'utils/normalize';

export function getOrFetchEventsFlow(){
  return function (dispatch){
    dispatch(getOrFetchEvents());
    api.fetchEvents()
    .then(({data}={})=>{
      data = eventsNormalizr(data);
      dispatch(getOrFetchEventsSuccess(data));
    }).catch(function (error) {
      dispatch(getOrFetchEventsError(error));
    });
  };
}