import Courses from './courses/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Hero from './components/Hero.jsx'
import Category from './courses/Category.jsx'
import CategoryDetails from './courses/CategoryDetails.jsx'
import CourseDetails from "./courses/CourseDetails.jsx";
// import CreateCourse from "./pages/CreateCourse";
import { CourseFormPage } from "./pages/CourseFormPage.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* INFO: Main page*/}
          <Route path='/' element={<Hero />} />

          {/* INFO: pages */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/category' element={<Category />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          {/* <Route path="/courses/new" element={<CreateCourse />} /> */}
          <Route path="/courses/new" element={<CourseFormPage />} />
          <Route path="/courses/:_id/edit" element={<CourseFormPage />} />
          {/* <Route path="/courses" element={<CreateCourse />} /> */}

        </Routes >
      </BrowserRouter>
    </>
  )
}

export default App
