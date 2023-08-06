import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation'; 
import Register from './Register/Register'; 
import Login from './Login/Login'; 
import Contacts from './Contacts/Contacts'; 
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import Home from './Home/Home';



const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route exact path="/register" element={<RestrictedRoute redirectTo="/register" component={<Register />} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
