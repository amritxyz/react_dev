import React from 'react';
import { useFormik } from 'formik';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../auth/auth.js';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      try {
        const res = await login(values);
        setToken(res.data.token);
        toast.success('Login successful');
        navigate('/courses');
      } catch (err) {
        toast.error('Login failed');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" />
      <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
