import React from'react';
import { useDispatch } from'react-redux';
import { login } from'../../redux/auth/operations';
import { useFormik } from'formik';
import * as Yup from'yup';

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
      dispatch(login(values)); 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}><label htmlFor="email">Email</label><input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label><input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <button type="submit">Login</button></form>
  );
};

export default LoginForm;