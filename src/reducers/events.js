/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  GET_OR_FETCH_EVENTS,
  GET_OR_FETCH_EVENTS_SUCCESS,
  GET_OR_FETCH_EVENTS_ERROR,
} from 'constants/events';


import { from as fromJS } from 'seamless-immutable';
// import {firstKey} from 'utils/general';
import {mergeOverrides} from 'utils/reducerHelpers';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  events: {
    
  },
});



const mergeEvents = (state, {events}, overrides={})=>{
  events = mergeOverrides(events, overrides);
  return state
    .merge({events}, {deep: true});
}

const setError = (state, action)=>{
  return state
    .set('error', action.error)
    .set('loading', false);
}

const setLoading = (state, action)=>{
  return state
    .set('loading', true)
    .set('error', false);
}

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OR_FETCH_EVENTS:
      return setLoading(state, action);
    case GET_OR_FETCH_EVENTS_SUCCESS:
      console.log(action);
      return mergeEvents(state, action);
    case GET_OR_FETCH_EVENTS_ERROR:
      return setError(state, action);
    default:
      return state;
  }
}

export default eventsReducer;