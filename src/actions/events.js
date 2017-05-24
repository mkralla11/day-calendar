import {
  GET_OR_FETCH_EVENTS,
  GET_OR_FETCH_EVENTS_SUCCESS,
  GET_OR_FETCH_EVENTS_ERROR,
} from 'constants/events';

export function getOrFetchEvents() {
  return {
    type: GET_OR_FETCH_EVENTS
  };
}


export function getOrFetchEventsSuccess(events) {
  return {
    type: GET_OR_FETCH_EVENTS_SUCCESS,
    events
  };
}


export function getOrFetchEventsError(error) {
  return {
    type: GET_OR_FETCH_EVENTS_ERROR,
    error
  };
}