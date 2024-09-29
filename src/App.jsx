import React, { useEffect } from'react';
import { useDispatch, useSelector } from'react-redux';
import { Routes, Route } from'react-router-dom';
import Layout from'./components/Layout/Layout';
import HomePage from'./pages/HomePage';
import ContactsPage from'./pages/ContactsPage';
import RegistrationPage from'./pages/RegistrationPage';
import LoginPage from'./pages/LoginPage';
import { refreshUser } from'./redux/auth/operations';
import { selectIsRefreshing } from'./redux/auth/selectors';
import PrivateRoute from'./routes/PrivateRoute';
import RestrictedRoute from'./routes/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Layout><Routes><Route path="/" element={<HomePage />} />
        <Route path="contacts"element={
            <PrivateRoute><ContactsPage /></PrivateRoute>
          }
        />
        <Route path="register"element={
            <RestrictedRoute restricted={true}><RegistrationPage /></RestrictedRoute>
          }
        />
        <Route path="login"element={
            <RestrictedRoute restricted={true}><LoginPage /></RestrictedRoute>
          }
        />
      </Routes></Layout>
  );
};

export default App;