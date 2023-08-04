import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Register from './Register';
import Login from './Login';
import Contacts from './Contacts';

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
};

export default App;
