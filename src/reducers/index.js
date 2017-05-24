import { combineReducers, routerReducer } from 'redux-seamless-immutable';
import { from as fromJS } from 'seamless-immutable';
import events from 'reducers/events';

const rootReducer = combineReducers({
  routing: routerReducer,
  events
});

export default rootReducer;