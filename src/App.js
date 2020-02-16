import React from 'react';
import './App.css';
import { BrowserRouter as Router ,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import  User from './user/pages/User';
import NewPlaces from './places/pages/NewPlaces';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = '/' exact>
          <User />
        </Route>
        <Route path = '/places/new' exact>
          <NewPlaces />
        </Route>
        <Redirect to = '/'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
