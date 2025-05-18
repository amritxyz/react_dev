import { Link } from "react-router-dom";
import Courses from "../components/Courses";

const Navbar = () => {
  return (
    <>
      {/* INFO: Header or Main section */}
      <header className='sticky top-0 w-[100%] h-16 flex items-center justify-center shadow-xs bg-white/60 backdrop-blur-md'>

        {/* INFO: 95% div */}
        <main className='w-95/100 h-10 my-1 flex items-center justify-between'>

          {/* INFO: Logo stuffs */}
          <div className='flex flex-row items-center justify-center gap-6'>
            <a href="#hero" className="flex items-center gap-2">
              <div className='rounded-full h-8 w-8 flex items-center justify-center
             bg-gradient-to-r from-blue-500 to-purple-500'>
                <span className='text-white font-bold text-sm'>ED</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                EduLearn
              </span>
            </a>

            {/* TODO: Navigate through <Link /> */}
            <nav className="hidden md:flex gap-6 text-sm">
              <Link to="/courses" className="font-medium text-current/70 transition-colors hover:text-current"> All Courses </Link>
              <a href="#category" className="font-medium text-current/70 transition-colors hover:text-current"> Categories </a>
              <a href="#footer" className="font-medium text-current/70 transition-colors hover:text-current"> About Us </a>
            </nav>
          </div>

          {/* INFO: Right-side / Login and Sign-Up buttons */}
          <div className="flex items-center gap-2">
            <Link to="/login" className="inline-flex items-center justify-center h-10 text-sm font-medium text-current hover:bg-current/10 px-4 py-2 rounded-[7px] ">
              Login
            </Link>
            <Link to="/signup" className="inline-flex items-center justify-center h-10 text-sm font-medium text-white px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[7px] hover:from-blue-800 hover:to-purple-800 ">
              Sign Up
            </Link>

            {/* TODO: option menu in mobile view */}
            <button className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 md:hidden cursor-pointer hover:bg-current/10">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </button>
          </div>

        </main>

      </header>
    </>
  );
}

export default Navbar;
