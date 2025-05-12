import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthProvider";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [imageError, setImageError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImageError("");
      
      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">Create New Blog Post</h2>
            <p className="text-indigo-100">Share your thoughts, stories, and ideas with the world.</p>
          </div>
          
          <div className="p-6 md:p-8">
            <ToastContainer position="top-center" />
            
            <Formik
              initialValues={{ title: "", content: "" }}
              validationSchema={Yup.object().shape({
                title: Yup.string()
                  .min(2, "Title must be at least 2 characters")
                  .max(100, "Title cannot exceed 100 characters")
                  .required("Title is required"),
                content: Yup.string()
                  .min(10, "Content must be at least 10 characters")
                  .max(5000, "Content cannot exceed 5000 characters")
                  .required("Content is required"),
              })}
              onSubmit={async (values, { resetForm, setSubmitting }) => {
                try {
                  if (!file) {
                    setImageError("Please upload a featured image for your blog");
                    return;
                  }

                  // Show loading toast
                  const loadingToast = toast.loading("Creating your blog post...");

                  const formData = new FormData();
                  formData.append("title", values.title);
                  formData.append("content", values.content);
                  formData.append("image", file);
                  
                  // Check if user data exists before appending
                  if (user?._id) {
                    formData.append("userId", user._id);
                    formData.append("author", user._id);
                  }
                  if (user?.name) {
                    formData.append("username", user.name);
                  }
                  if (user?.email) formData.append("email", user.email);

                  const res = await axios.post(
                    "https://blog-hqx2.onrender.com/blog/create",
                    formData,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  );

                  // Dismiss loading toast and show success
                  toast.dismiss(loadingToast);
                  toast.success("Blog created successfully!");
                  
                  resetForm();
                  setFile(null);
                  setImagePreview(null);

                  setTimeout(() => {
                    navigate("/home");
                  }, 1500);
                } catch (error) {
                  toast.error(
                    error.response?.data?.message ||
                      "Failed to create blog. Please try again."
                  );
                  console.error(
                    "Blog creation error:",
                    error.response?.data || error.message
                  );
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting, values }) => (
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Blog Title
                    </label>
                    <Field
                      name="title"
                      type="text"
                      placeholder="Enter an eye-catching title"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Blog Content
                    </label>
                    <Field
                      as="textarea"
                      name="content"
                      rows="8"
                      placeholder="Write your blog content here..."
                      className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <ErrorMessage
                      name="content"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                    <div className="mt-1 text-xs text-gray-500 flex justify-between">
                      <span>Min 10 characters</span>
                      <span>{values.content.length}/5000 characters</span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="image"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Featured Image
                    </label>
                    <div className="mt-1 flex items-center">
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="image"
                        className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Choose File
                      </label>
                      <span className="ml-3 text-sm text-gray-500">
                        {file ? file.name : "No file selected"}
                      </span>
                    </div>
                    {imageError && (
                      <div className="text-red-500 text-sm mt-1">{imageError}</div>
                    )}
                    
                    {/* Image Preview */}
                    {imagePreview && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Image Preview</p>
                        <div className="relative w-full h-48 border rounded-md overflow-hidden">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-cover" 
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setFile(null);
                              setImagePreview(null);
                            }}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md shadow-md hover:from-indigo-700 hover:to-purple-700 transition duration-300 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Publishing...
                        </>
                      ) : (
                        <>
                          Publish Blog
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;