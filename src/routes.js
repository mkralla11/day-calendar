import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import DayPage from './containers/DayPage';

export default function routes(){
  return (  
    <Route path="/" component={App}>
      <IndexRoute component={DayPage}/>
    </Route>
  );
}
