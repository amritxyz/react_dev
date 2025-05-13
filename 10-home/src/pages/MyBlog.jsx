import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdDelete } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { Link } from "react-router-dom";

const MyBlog = () => {
  const [myBlog, setMyBlog] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchData = async () => {
    if (user) {
      const response = await axios.get(`https://blog-hqx2.onrender.com/blog/${user?._id}`);
      setMyBlog(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?._id]);

  const deleteBlogs = async (id) => {
    const response = await axios.delete(`https://blog-hqx2.onrender.com/blog/ ${id}`);
    if (response.status === 200) {
      alert("Blog deleted successfully");
      fetchData(); // Refresh data after deletion
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">My Blogs</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myBlog?.map((blog, index) => (
          <div
            key={index}
            className="bg-white ring-2 ring-blue-500 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-101 border border-gray-200"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h1>
              <p className="text-gray-600 line-clamp-3 mb-4">{blog.content}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => deleteBlogs(blog?._id)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                >
                  <MdDelete size={24} />
                  <span className="font-medium">Delete</span>
                </button>
                <Link
                  to={`/edit/${blog?._id}`}
                  state={{ blog }}
                  className="text-green-500 hover:text-green-700 transition-colors duration-200 flex items-center gap-1"
                >
                  <RxUpdate size={24} />
                  <span className="font-medium">Edit</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
