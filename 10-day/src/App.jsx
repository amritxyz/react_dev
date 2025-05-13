import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthProvider";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const App = () => {
  const { user } = useContext(AuthContext); // Get the user from AuthContext

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Public Routes - Redirect to home if logged in */}
        <Route
          path="/signup"
          element={
            <PublicRoute user={user}>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute user={user}>
              <Login />
            </PublicRoute>
          }
        />

        {/* Protected Routes - Require authentication */}
        <Route
          path="/home"
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-blog"
          element={
            <ProtectedRoute user={user}>
              <CreateBlog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
