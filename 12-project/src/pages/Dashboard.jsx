import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { AiOutlinePoweroff } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import Footer from "../Footer.jsx"

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://blog-hqx2.onrender.com/blog ");
      setBlogs(response.data);
      console.log("Root:", response.data);
    } catch (error) {
      console.error("Root error:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const navitems = [
    { title: "Home", icon: <IoIosHome />, path: "/dashboard" },
    { title: "Create", icon: <IoCreateOutline />, path: "/createblog" },
    { title: "My blogs", icon: <GoBook />, path: "/myblog" },
  ];

  const userItems = [
    {
      title: user?.name || "Guest",
      icon: <IoPersonCircleOutline size={20} />,
      path: "/profile",
      className:
        "flex items-center space-x-2 px-3 py-2 rounded-xl border border-transparent hover:border-blue-600 hover:bg-blue-50 text-blue-500 transition-all duration-200",
    },
    {
      title: "Logout",
      icon: <AiOutlinePoweroff />,
      path: "/",
      className:
        "flex items-center space-x-2 px-3 py-2 rounded-xl border border-transparent hover:border-red-600 hover:bg-red-50 text-red-500 transition-all duration-200",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow-md p-4 mb-6 flex items-center justify-between border border-gray-200">
        <div className="text-left">
          <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
            <Link to="/dashboard">BlogVerse</Link>
          </h1>
        </div>

        {/* Mobile wala menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop wala nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-4">
            {navitems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 border border-transparent rounded-xl transition-all duration-200 hover:bg-gray-800/10 hover:border-gray-700
                    ${location.pathname === item.path
                      ? "bg-gray-200 border-gray-700"
                      : ""
                    }`}
                >
                  <span className="text-blue-500">{item.icon}</span>
                  <span className="text-gray-900 font-medium">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex space-x-4">
            {userItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className={item.className}>
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile wala menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-3">
          <ul className="space-y-2">
            {navitems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`block w-full text-left px-3 py-2 rounded-xl border border-transparent hover:bg-gray-800/10 hover:border-gray-700 ${location.pathname === item.path
                    ? "bg-gray-200 border-gray-700"
                    : ""
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-blue-500">{item.icon}</span>
                    <span>{item.title}</span>
                  </span>
                </Link>
              </li>
            ))}

            {userItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={item.className}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Blog cards vane ni vayo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {blogs && blogs.length > 0 ? (
          blogs.map((val, i) => (
            <div key={val._id || i}>
              <Link to={`/blog/${val._id}`}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                    {val.title}
                  </h2>
                  <p className="text-xs text-gray-600 mb-2">
                    by{" "}
                    <span className="font-medium truncate">{val.author.name}</span> (
                    {val.author.email})
                  </p>
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-36 object-cover rounded mb-3"
                  />
                  <p className="text-sm text-gray-700 line-clamp-3 mb-2 whitespace-pre-wrap">
                    {val.content}
                  </p>
                  <p className="text-xs text-gray-500">
                    Created at: {new Date(val.createdAt).toLocaleString()}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full py-6">
            No blogs available.
          </p>
        )}
      </div>

      {/* child routes */}
      <div className="p-4">
        <Outlet context={{ blogs }} />
        <Footer />
      </div>
    </section>
  );
};

export default Dashboard;
