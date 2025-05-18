import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required.'),
  email: Yup.string().email('Invalid Email').required('Email is required.'),
  password: Yup.string().min(6, 'at least 6 characters.').required('Password is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('Confirm Password is required.'),
});

const onSubmit = (values) => {
  console.log('Form Data: ', values);
};

const SignUp = () => {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center bg-current/2">
      <div className="container sm:w-full sm:max-w-md flex flex-col items-center justify-center w-95/100">
        <div className="h-12 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">ED</span>
        </div>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <a className="font-medium text-blue-600 hover:text-blue-500" href="/login">
          Login to your account
        </a>
      </p>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium leading-none">Full Name</label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base placeholder:text-current/50 md:text-sm"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base placeholder:text-current/50 md:text-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base placeholder:text-current/50 md:text-sm"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium leading-none">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="h-10 w-full rounded-md border border-current/10 bg-current/1 px-3 py-2 text-base placeholder:text-current/50 md:text-sm"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 w-full text-white cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Sign up
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
