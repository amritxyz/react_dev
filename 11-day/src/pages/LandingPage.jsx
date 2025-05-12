import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const LandingPage = () => {
  const { token } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left column with text */}
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 leading-tight mb-6">
                Share Your Story With The World
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                BlogSpace gives you a beautiful, professional platform to
                express yourself, connect with readers, and build your online
                presence.
              </p>

              {!token ? (
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/login"
                    className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-center"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 text-lg font-medium rounded-lg hover:bg-indigo-50 transition duration-300 text-center"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/home"
                    className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-center"
                  >
                    View Blogs
                  </Link>
                  <Link
                    to="/create-blog"
                    className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 text-lg font-medium rounded-lg hover:bg-indigo-50 transition duration-300 text-center"
                  >
                    Create Blog
                  </Link>
                </div>
              )}
            </div>

            {/* Right column with illustration */}
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-full h-auto text-indigo-500"
                >
                  <path
                    fill="currentColor"
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                  />
                  <path
                    fill="currentColor"
                    d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose BlogSpace?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-indigo-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Customization
              </h3>
              <p className="text-gray-700">
                Personalize your blog posts with rich formatting options,
                images, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-purple-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure Platform
              </h3>
              <p className="text-gray-700">
                Your content is safe with us. We provide secure user
                authentication and data protection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="text-pink-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Beautiful Design
              </h3>
              <p className="text-gray-700">
                Make your content stand out with our professionally designed
                blog templates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Blogging?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of writers who have already found their voice with
            BlogSpace.
          </p>
          {!token ? (
            <Link
              to="/signup"
              className="px-8 py-3 bg-white text-indigo-600 text-lg font-medium rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
            >
              Get Started Now
            </Link>
          ) : (
            <Link
              to="/create-blog"
              className="px-8 py-3 bg-white text-indigo-600 text-lg font-medium rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
            >
              Create Your First Blog
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
