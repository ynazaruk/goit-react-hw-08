import React from'react';
import { useDispatch, useSelector } from'react-redux';
import { logout } from'../../redux/auth/operations';
import { selectUser } from'../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div><p>Welcome, {user.name}</p><button onClick={() => dispatch(logout())}>Log out</button></div>
  );
};

export default UserMenu;