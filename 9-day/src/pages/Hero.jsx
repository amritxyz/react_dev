import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[#1d2021]">
      <div className="flex flex-col items-center justify-center h-full w-full px-4 text-center">
        <p className="text-yellow-600 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl">
          I continue to be the Chief GNUisance of the GNU Project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/login"
            className="shadow-xl text-lg sm:text-xl ring-2 ring-[#a1c49c] hover:ring-[#ea6962] px-6 py-2 rounded-xl transition-transform duration-300 hover:scale-110 bg-[#434a4c] hover:bg-[#d4be98] text-[#d4be98] hover:text-[#303536]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="shadow-xl text-lg sm:text-xl ring-2 ring-[#a1c49c] hover:ring-[#ea6962] px-6 py-2 rounded-xl transition-transform duration-300 hover:scale-110 bg-[#434a4c] hover:bg-[#d4be98] text-[#d4be98] hover:text-[#303536]"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
