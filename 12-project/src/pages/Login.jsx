import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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

            navigate("/dashboard");
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            toast.error(errorMessage);
        }
    };

    return (
        <div className="max-w-lg mx-auto m-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    {/* Define Fields */}
                    {[
                        {
                            name: 'email',
                            label: 'Email',
                            type: 'email',
                            placeholder: 'Enter your email',
                        },
                        {
                            name: 'password',
                            label: 'Password',
                            type: 'password',
                            placeholder: 'Enter your password',
                        },
                    ].map((field) => (
                        <div key={field.name} className="mb-4">
                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>

                            {field.type === 'textarea' ? (
                                <Field
                                    as="textarea"
                                    id={field.name}
                                    name={field.name}
                                    rows="3"
                                    placeholder={field.placeholder}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <Field
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            )}

                            <ErrorMessage
                                name={field.name}
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                    ))}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                    <p className="flex items-center justify-center my-3">
                        new to our page?
                        <Link to="/signup" className="mx-1 text-blue-500 hover:underline duration-300">
                            Signup
                        </Link>
                    </p>
                </Form>
            </Formik>
            <ToastContainer />
        </div>
    );
};

export default Login;
