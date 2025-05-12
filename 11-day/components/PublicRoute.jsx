import React from "react";
import { Navigate } from "react-router-dom";

// This component is for routes that should only be accessible when NOT logged in
// It redirects authenticated users to the home page
const PublicRoute = ({ user, children }) => {
  // If user is authenticated, redirect to home
  if (user) {
    return <Navigate to="/home" replace />;
  }

  // If user is not authenticated, render the children components (login/signup pages)
  return children;
};

export default PublicRoute;
