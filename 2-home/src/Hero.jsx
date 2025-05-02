import React from "react";

const Hero = () => {
  return (
    <div id="home" className="flex items-center justify-center h-screen bg-[#002b36]">
      <div className="w-[95%] mx-auto flex flex-col items-center justify-center text-center my-8">
        <h1 className="text-3xl text-[#839496] mt-3">
          Hi
        </h1>
        <p className="w-4/5 text-2xl md:w-2/5 text-[#839496] mt-3">
          I am an open-source enthusiast and programmer with a passion for crafting
          elegant and efficient code and deeply committed to the principles of minimalism.
        </p>
        <div className="flex items-center justify-center gap-4 mt-5">
          <a href="#" className="shadow-xl text-2xl ring-2 ring-cyan-500/30 px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-110 bg-[#073642] hover:bg-[#2aa198] text-[#839496] hover:text-[#eee8d5]">
            Explore
          </a>
          <a href="#" className="shadow-xl text-2xl ring-2 ring-cyan-500/30 px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-110 bg-[#073642] hover:bg-[#2aa198] text-[#839496] hover:text-[#eee8d5]">
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
