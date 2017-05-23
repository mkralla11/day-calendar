import {map, addIndex, modulo, __, not, compose} from 'ramda';

export const mapIndexed = addIndex(map);

export const isOdd = modulo(__, 2);


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


