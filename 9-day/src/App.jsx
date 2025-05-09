import React from 'react'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Hero from './Hero.jsx'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blogs" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
