import React from "react";
import { Link } from "react-router-dom";

// <img src="https://wallpapercave.com/wp/wp11058350.png" className="absolute h-screen w-screen blur-xs" />

const Hero = () => {
  return (
    <>
      <div className="relative h-screen bg-[#1d2021]">
        <div className="flex flex-col align-center items-center justify-center h-screen w-screen">
          <p className="relative text-yellow-600 font-bold text-3xl">
            I continue to be the Chief GNUisance of the GNU Project.
          </p>

          <div className="flex mx-10 my-10">
            <div className="relative flex items-center justify-center gap-4 mt-5">
              <Link to="/login" className="shadow-xl text-2xl ring-2 ring-[#a1c49c] hover:ring-[#ea6962] px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-110 bg-[#434a4c] hover:bg-[#d4be98] text-[#d4be98] hover:text-[#303536]">
                Login
              </Link>
              <Link to="/signup" className="shadow-xl text-2xl ring-2 ring-[#a1c49c] hover:ring-[#ea6962] px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-110 bg-[#434a4c] hover:bg-[#d4be98] text-[#d4be98] hover:text-[#303536]">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
