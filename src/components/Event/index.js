import React from 'react';
import PropTypes from 'prop-types';
import './event.scss';
// import {map} from 'ramda';

export default class Event extends React.PureComponent {
  static propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }


  render(){
    const {top, left, height, width} = this.props
    const eventStyle = {
      top,
      left,
      height,
      width
    }
    return (
      <div className="event" style={eventStyle}>
        <div className="event-inner">
          <div className="event-content">
            <h3 className="event-title">
              Sample Item
            </h3>
            <p className="event-body">
              Sample Location
            </p>
          </div>
        </div>
      </div>
    )
  }
}