import React from'react';
import PropTypes from'prop-types';
import { Navigate } from'react-router-dom';
import { useSelector } from'react-redux';
import { selectIsLoggedIn } from'../redux/auth/selectors';

const RestrictedRoute = ({ children, restricted }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return restricted && isLoggedIn ? <Navigate to="/contacts" /> : children;
};

RestrictedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  restricted: PropTypes.bool.isRequired, 
};

export default RestrictedRoute;