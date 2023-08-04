import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation'; // Sprawdź poprawność ścieżki
import Register from './Register/Register'; // Sprawdź poprawność ścieżki
import Login from './Login/Login'; // Sprawdź poprawność ścieżki
import Contacts from './Contacts/Contacts'; // Sprawdź poprawność ścieżki

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
