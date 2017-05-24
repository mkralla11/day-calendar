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
  SET_EVENTS_CONTAINER_WIDTH
} from 'constants/eventsContainer';


import { from as fromJS } from 'seamless-immutable';

// The initial state of the App
const initialState = fromJS({
  width: 0
});


function eventsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS_CONTAINER_WIDTH:
      return state.set('width', action.width);
    default:
      return state;
  }
}

export default eventsContainerReducer;