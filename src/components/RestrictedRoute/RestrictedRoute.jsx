import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/', ...props }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...props}
      element={isLoggedIn ? <Component /> : <Navigate to={redirectTo} />}
    />
  );
};
