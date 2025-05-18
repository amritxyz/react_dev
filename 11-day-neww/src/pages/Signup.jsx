import React from 'react';
import { useFormik } from 'formik';
import { signup } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: async (values) => {
      try {
        await signup(values);
        toast.success('Signup successful');
        navigate('/login');
      } catch (err) {
        toast.error('Signup failed');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input name="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Name" />
      <input name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" />
      <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup
