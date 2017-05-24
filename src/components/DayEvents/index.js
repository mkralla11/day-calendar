import React from 'react';
import PropTypes from 'prop-types';
import './dayEvents.scss';
import Event from 'components/Event';
import {map} from 'ramda';

export default class DayEvents extends React.PureComponent {
  static propTypes = {
    eventPositions: PropTypes.array.isRequired
  }

  renderEvent = (event)=>
    <Event {...event} key={event.id} />


  render(){
    console.log(this.props.eventPositions)
    return (
      <div className="day-events">
        <div className="day-events-inner">
          {map(this.renderEvent, this.props.eventPositions)}
        </div>
      </div>
    )
  }
}