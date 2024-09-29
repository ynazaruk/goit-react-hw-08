import React from'react';
import PropTypes from'prop-types';
import { Navigate } from'react-router-dom';
import { useSelector } from'react-redux';
import { selectIsLoggedIn } from'../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired, 
};

export default PrivateRoute;