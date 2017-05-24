import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Day from 'components/Day';
import {getOrFetchEventsFlow} from 'actionCreators/events';
import {makeSelectCalculatedEventPositions} from 'selectors/events';

export const DayPage = (props) => {
  return (
    <Day
      {...props}
      />
  );
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
  };
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(DayPage);