import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">EduLearn</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600">Courses</Link>
            {user ? (
              <>
                <span className="text-gray-700">Hi, {user.name}</span>
                <button onClick={logout} className="text-red-600 hover:underline">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Sign Up</Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block text-gray-700">Home</Link>
            <Link to="/courses" className="block text-gray-700">Courses</Link>
            {user ? (
              <>
                <span className="block text-gray-700">Hi, {user.name}</span>
                <button onClick={logout} className="block text-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-gray-700">Login</Link>
                <Link to="/signup" className="block bg-indigo-600 text-white px-4 py-2 rounded-md text-center">Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
