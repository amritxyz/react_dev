import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CourseList from './pages/CourseList';
import CreateCourse from './pages/CreateCourse';
import CreateCategory from './pages/CreateCategory';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Router>
    <ToastContainer />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses" element={<ProtectedRoute><CourseList /></ProtectedRoute>} />
      <Route path="/create-course" element={<ProtectedRoute><CreateCourse /></ProtectedRoute>} />
      <Route path="/create-category" element={<ProtectedRoute><CreateCategory /></ProtectedRoute>} />
    </Routes>
  </Router>
);
