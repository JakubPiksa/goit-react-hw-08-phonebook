import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation'; 
import Register from './Register/Register'; 
import Login from './Login/Login'; 
import Contacts from './Contacts/Contacts'; 

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
      </Routes>
    </div>
  );
};

export default App;
