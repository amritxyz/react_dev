import Courses from './components/Courses.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Hero from './pages/Hero.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* INFO: Main page*/}
          <Route path='/' element={<Hero />} />

          {/* INFO: Components */}
          <Route path='/courses' element={<Courses />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes >
      </BrowserRouter>
    </>
  )
}

export default App
