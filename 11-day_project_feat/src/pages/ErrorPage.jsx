import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="mt-2 text-gray-700">Page not found</p>
      <Link to="/" className="mt-4 text-indigo-600 hover:underline">Go back home</Link>
    </div>
  );
}
