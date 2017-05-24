import { combineReducers, routerReducer } from 'redux-seamless-immutable';
// import { from as fromJS } from 'seamless-immutable';
import events from 'reducers/events';
import eventsContainer from 'reducers/eventsContainer';


const rootReducer = combineReducers({
  routing: routerReducer,
  events,
  eventsContainer
});

export default rootReducer;