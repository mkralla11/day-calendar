import React from 'react';
import PropTypes from 'prop-types';
import './day.scss';
import HoursList from 'components/HoursList';
import DayEvents from 'components/DayEvents';

export default class Day extends React.PureComponent {
  render(){
    return (
      <div className="day-root">
        <div className="day-hours-outer">
          <HoursList/>
        </div>
        <div className="day-events-outer">
          <DayEvents/>
        </div>
      </div>
    )
  }
}