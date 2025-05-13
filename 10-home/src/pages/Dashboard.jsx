import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { AiOutlinePoweroff } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import Footer from "../Footer.jsx";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://blog-hqx2.onrender.com/blog ");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const navItems = [
    { title: "Home", icon: <IoIosHome size={20} />, path: "/dashboard" },
    { title: "Create", icon: <IoCreateOutline size={20} />, path: "/createblog" },
    { title: "My Blogs", icon: <GoBook size={20} />, path: "/myblog" },
  ];

  const userItems = [
    {
      title: user?.name || "Guest",
      icon: <IoPersonCircleOutline size={20} />,
      path: "/profile",
    },
    {
      title: "Logout",
      icon: <AiOutlinePoweroff size={20} />,
      path: "/",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header / Navbar */}
      <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              <Link to="/dashboard">BlogVerse</Link>
            </h1>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${location.pathname === item.path
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                        }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="flex space-x-4">
                {userItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-transparent hover:border-gray-300 transition-all duration-200 ${item.title === "Logout"
                        ? "text-red-500 hover:bg-red-50"
                        : "text-blue-500 hover:bg-blue-50"
                        }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 animate-fadeIn">
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg w-full text-left ${location.pathname === item.path
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}

            <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
              {userItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg w-full text-left ${item.title === "Logout"
                      ? "text-red-500 hover:bg-red-50"
                      : "text-blue-500 hover:bg-blue-50"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog, i) => (
              <Link key={blog._id || i} to={`/blog/${blog._id}`}>
                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 ring-2 ring-blue-500">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">{blog.title}</h2>
                    <p className="text-xs text-gray-500 mb-3">
                      By{" "}
                      <span className="font-medium text-gray-700 truncate">
                        {blog.author.name}
                      </span>{" "}
                      ({blog.author.email})
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{blog.content}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full py-6">No blogs available.</p>
          )}
        </div>

        {/* Child Routes */}
        <div className="mt-10">
          <Outlet context={{ blogs }} />
        </div>
      </main>

      <Footer />
    </section>
  );
};

export default Dashboard;
