import React, { useContext } from "react";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Define initial values
  const initialValues = {
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Handle submit with postFormData
  const onSubmit = async (values) => {
    try {
      const response = await axios.post("https://blog-hqx2.onrender.com/user/login ", values);
      toast.success("Login successful.");

      const token = response.data.token;
      const user = response.data.user;

      login(token, user);

      navigate("/courses");
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <section className="flex flex-col items-center min-h-screen justify-center bg-current/2">
      <div className="container sm:w-full sm:max-w-md flex flex-col items-center justify-center w-95/100">
        <div className="h-12 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">ED</span>
        </div>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or <a className="font-medium text-blue-600 hover:text-blue-500" href="/signup">create an account</a>
      </p>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                <div className="md:my-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base ring-offset-background placeholder:text-current/50 focus-visible:outline-none focus-visible:border-2 focus-visible:border-current/70 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</Link>
                  </div>
                </div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="flex h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base ring-offset-background placeholder:text-current/50 focus-visible:outline-none focus-visible:border-2 focus-visible:border-current/70 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 w-full text-white cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Sign in
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Login;
