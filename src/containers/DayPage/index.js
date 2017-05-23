import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as actions from '../actions/fuelSavingsActions';
import Day from 'components/Day';

export const DayPage = (props) => {
  return (
    <Day/>
  );
};

DayPage.propTypes = {
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayPage);