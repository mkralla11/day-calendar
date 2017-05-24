import {map, addIndex, modulo, __, not, compose, reduce, apply, keys} from 'ramda';
import {MINUTE_OFFSET} from 'constants/general';

export const mapIndexed = addIndex(map);
export const reduceIndexed = addIndex(reduce);

export const isOdd = modulo(__, 2);
export const maxKey = compose(
  apply(Math.max),
  keys
)

export function fromMinutesToTimePeriod(minutes){
  let h = Math.floor(minutes / 60);
  let period = 'AM';
  if(h > 12){
    h = h % 12;
    period = 'PM';
  }


  let m = minutes % 60;
  m = m < 10 ? `0${m}` : m;

  return {
    minutesOfDay: minutes,
    hours: h,
    minutes: m,
    period
  };
}



export function fromMinutesToTimePeriodWithOffset(minutes){
  return fromMinutesToTimePeriod(minutes + MINUTE_OFFSET);
}