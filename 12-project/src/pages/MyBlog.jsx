import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdDelete } from 'react-icons/md';

const MyBlog = () => {
  const [myBlog, setMyBlog] = useState([]);
  const { user } = useContext(AuthContext);

  console.log(user)
  const fetchData = async () => {
    if (user) {
      const response = await axios.get(`https://blog-hqx2.onrender.com/blog/${user?._id}`);
      setMyBlog(response.data);
    }

  }

  useEffect(() => {
    fetchData();
  }, [user?._id])


  const deleteBlogs = async (id) => {
    const response = await axios.delete(`https://blog-hqx2.onrender.com/blog/${id}`)
    if (response.status === 200) {
      alert("blog delete sucessfully");
    }
  }

  return (
    <div className='w-11/12 mx-auto'>
      <h1>My Blogs</h1>
      <div className='grid gap-12 grid-cols-3'>
        {
          myBlog?.map((blog, index) => {
            return (
              <div key={index} className='flex flex-col gap-2 shadow-sm p-4 shadow-blue-300'>
                <h1 className='font-bold text-xl'>{blog.title}</h1>
                <img src={blog.image} alt="" className="h-72 w-full" />
                <p className='text-gray-600 font-semibold'>{blog.content}</p>
                <button className='text-red-500 cursor-pointer flex  text-2xl'>
                  <MdDelete onClick={() => deleteBlogs(blog?._id)} />
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default MyBlog;
