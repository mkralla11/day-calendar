import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Day from 'components/Day';
import {getOrFetchEventsFlow} from 'actionCreators/events';
import {setEventsContainerWidth} from 'actions/eventsContainer';
import {makeSelectCalculatedEventPositions} from 'selectors/events';

class DayPage extends React.Component {
  onEventsContainerResize = ({width})=>
    this.props.setEventsContainerWidth(width)
  
  render(){
    return (
      <Day
        {...this.props}
        onEventsContainerResize={this.onEventsContainerResize}
        />
    );
  }
};

DayPage.propTypes = {
};

const makeMapStateToProps = () => {
  const selectCalculatedEventPositions = makeSelectCalculatedEventPositions();
  const mapStateToProps = (state, props) => {
    return {
      eventPositions: selectCalculatedEventPositions(state)
    }
  }
  return mapStateToProps
}

function mapDispatchToProps(dispatch) {
  return {
    getOrFetchEventsFlow: bindActionCreators(getOrFetchEventsFlow, dispatch),
    setEventsContainerWidth: bindActionCreators(setEventsContainerWidth, dispatch)
  };
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(DayPage);