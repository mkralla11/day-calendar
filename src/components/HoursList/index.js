import React from 'react';
import PropTypes from 'prop-types';
import './hoursList.scss';
import {times, map} from 'ramda';
import {MINUTE_OFFSET} from 'constants/general';
import {fromMinutesToTimePeriod, mapIndexed, isOdd} from 'utils/general';
import {merge} from 'ramda';
// given 720 minutes per requirements, 
// (total minutes between 9am - 9pm)
// divided by 30 minute intervals
// (add 1 for end time)
const intervals = (720 / 30) + 1;

// hours minutes period height
const hmpHeight = 12;
const halfHmpHeight = hmpHeight / 2;
const hmpHeightPx = `${hmpHeight}px`;

const offHourHeight = 8;
const halfOffHourHeight = offHourHeight / 2;
const offHourHeightPx = `${offHourHeight}px`;

function generateTimeIntervals(){
  return times(
    (n)=>{
      // given interval n,
      // multiply by 30 minute interval,
      // add offset from start of day to normalize data
      const baseMinutes = n * 30
      const time = fromMinutesToTimePeriod((baseMinutes) + MINUTE_OFFSET)
      return {...time, baseMinutes}
    }
  , intervals)
}

export default class HoursList extends React.PureComponent {
  constructor(props){
    super(props);
    this.intervals = generateTimeIntervals();
  }

  renderTimeInterval = (t, i)=>{
    const key = `${t.hours}${t.minutes}${t.period}`;
    let hmpStyles = {
      top: t.baseMinutes - halfHmpHeight + 1,
      height: hmpHeightPx,
      fontSize: hmpHeightPx,
      lineHeight: hmpHeightPx,
      color: '#686868'
    }

    const odd = isOdd(i);
    if(odd){
      hmpStyles = merge(hmpStyles, {
        top: t.baseMinutes - halfOffHourHeight + 1,
        fontSize: offHourHeightPx,
        lineHeight: offHourHeightPx,
        color: '#a7a7a7'
      })
    }


    return this.renderHourMinuteLabel({
      key,
      hmpStyles,
      t,
      hasPeriod: !odd
    }) 
  }


  renderHourMinuteLabel({key, hmpStyles, t, hasPeriod}){
    return (
      <div className="hours-list-hmp" key={key} style={hmpStyles}>
        <span className="hours-list-hour-and-minute">
          {t.hours}:{t.minutes}
        </span>
        { hasPeriod &&
          <span className="hours-list-period">
            {t.period}
          </span>
        }
      </div>
    )
  }

  render(){
    return (
      <div className="hours-list">
        {
          mapIndexed(this.renderTimeInterval, this.intervals)
        }
      </div>
    )
  }
}