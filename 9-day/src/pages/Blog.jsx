import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  /*
   * Single page blog
   */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://blog-hqx2.onrender.com/blog/single/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="text-center p-8 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        by <span className="font-medium">{blog.author.name}</span> ({blog.author.email})
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="text-gray-800 text-base mb-4 whitespace-pre-wrap">
        {blog.content}
      </p>
      <p className="text-xs text-gray-500">
        Created at: {new Date(blog.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default Blog;
