import React from 'react';
import PropTypes from 'prop-types';
import './day.scss';
import HoursList from 'components/HoursList';
import DayEvents from 'components/DayEvents';

export default class Day extends React.PureComponent {
  static propTypes = {
    getOrFetchEventsFlow: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.getOrFetchEventsFlow();
  }

  render(){
    return (
      <div className="day-root">
        <div className="day-hours-outer">
          <HoursList/>
        </div>
        <div className="day-events-outer">
          <DayEvents 
            eventPositions={this.props.eventPositions}
            />
        </div>
      </div>
    )
  }
}