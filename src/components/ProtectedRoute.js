import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from './Loader';

const ProtectedRoute = ({ loggedIn, children, isCheckingToken, ...props }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    isCheckingToken && !loggedIn
      ? setShouldRender(false)
      : setShouldRender(true);
  }, [isCheckingToken, loggedIn]);

  if (!shouldRender) {
    return <Loader />;
  }

  return (
    <Route {...props}>{loggedIn ? children : <Redirect to="/signin" />}</Route>
  );
};

export default ProtectedRoute;
