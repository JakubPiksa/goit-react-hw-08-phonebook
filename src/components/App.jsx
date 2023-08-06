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
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<RestrictedRoute redirectTo="/login" component={<Contacts />} />} />
      </Routes>
    </div>
  );
};

export default App;
