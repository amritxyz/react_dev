import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address.').required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

const Login = () => {
  const { login, setToken } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check for ?token= in the URL
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      setToken(token); // from AuthContext
      navigate('/courses');
    }
  }, [searchParams, setToken, navigate]);

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    const res = await login(values.email, values.password);
    if (!res.success) {
      setErrors({ email: ' ', password: res.error });
    } else {
      window.location.href = '/courses';
    }
    setSubmitting(false);
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
                <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                <div className="md:my-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base placeholder:text-current/50 focus-visible:outline-none focus-visible:border-2 focus-visible:border-current/70"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</Link>
                  </div>
                </div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="flex h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base placeholder:text-current/50 focus-visible:outline-none focus-visible:border-2 focus-visible:border-current/70"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <Field
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
};

export default Login;
