import React from 'react';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
// import Hero from './pages/Hero.jsx';
import Hero from './home/Hero.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreateBlog from './pages/CreateBlog.jsx';
import Blog from './pages/Blog.jsx';
import MyBlog from './pages/MyBlog.jsx';
import Courses from './courses/Home.jsx'
// import Category from './home/Category.jsx';
import { CourseFormPage } from "./pages/CourseFormPage.jsx"
import CourseDetails from "./courses/CourseDetails.jsx";
import CategoryDetails from './courses/CategoryDetails.jsx'
import Category from './courses/Category.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/blog/:id" element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          } />
          <Route path='/createblog' element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          } />
          <Route path='/myblog' element={
            <ProtectedRoute>
              <MyBlog />
            </ProtectedRoute>
          } />
          <Route path='/courses' element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          <Route path='/category' element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          } />
          <Route path='/category:id' element={
            <ProtectedRoute>
              <CategoryDetails />
            </ProtectedRoute>
          } />
          <Route path='/course:id' element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          } />
          <Route path='/course/new' element={
            <ProtectedRoute>
              <CourseFormPage />
            </ProtectedRoute>
          } />
          <Route path='/courses/:_id/edit' element={
            <ProtectedRoute>
              <CourseFormPage />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
