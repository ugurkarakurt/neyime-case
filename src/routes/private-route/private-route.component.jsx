import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';

const PrivateRoute = () => {

  const { currentUser } = useContext(UserContext);

  const auth = currentUser;
  return auth ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;