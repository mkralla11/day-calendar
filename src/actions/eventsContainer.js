import {
  SET_EVENTS_CONTAINER_WIDTH
} from 'constants/eventsContainer';

export function setEventsContainerWidth(width) {
  return {
    type: SET_EVENTS_CONTAINER_WIDTH,
    width
  };
}