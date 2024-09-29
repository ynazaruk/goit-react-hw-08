import React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Link to="/register" className={css.navLink}>Register</Link>
      <Link to="/login" className={css.navLink}>Login</Link>
    </div>
  );
};

export default AuthNav;