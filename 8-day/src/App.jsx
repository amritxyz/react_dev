import React from 'react'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Hero from './Hero.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
