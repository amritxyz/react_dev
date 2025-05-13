import { Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";

const Edit = () => {
  const [image, setImage] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    if (image) formData.append("image", image);
    formData.append("author", user._id);

    try {
      await axios.put(`https://blog-hqx2.onrender.com/blog/ ${id}`, formData);
      navigate("/");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Blog</h1>

      <Formik
        initialValues={{
          title: location.state?.blog?.title || "",
          content: location.state?.blog?.content || "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
              Blog Title
            </label>
            <Field
              type="text"
              name="title"
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content Input */}
          <div>
            <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">
              Blog Content
            </label>
            <Field
              as="textarea"
              name="content"
              rows="5"
              placeholder="Write your blog content..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Blog Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-500 file:text-white
                hover:file:bg-blue-600"
            />
            {image && (
              <p className="mt-2 text-sm text-green-600">Selected: {image.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition duration-200"
          >
            <MdCloudUpload size={22} />
            <span>Update Blog</span>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Edit;
