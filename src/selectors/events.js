import layOutDay from 'utils/layOutDay';
import {path, compose, values} from 'ramda';
import { createSelector } from 'reselect';

const selectEvents = path(['events', 'events']);

const toArrayLayOutDay = compose(
  layOutDay,
  values
);


export function makeSelectCalculatedEventPositions(){
  return createSelector(
   selectEvents,
    (events) => {
      return toArrayLayOutDay(events);
    }
  );
}