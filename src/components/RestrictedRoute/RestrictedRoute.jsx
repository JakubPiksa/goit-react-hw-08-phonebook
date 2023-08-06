import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};
