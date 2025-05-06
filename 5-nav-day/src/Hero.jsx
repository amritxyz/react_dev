import React from "react";
import Musashi from "./assets/musashi.png";

const Hero = () => {
  return (
    <>
      <div className="flex align-center justify-center rounded-full">
        <img src={Musashi} className="h-50 w-50 rounded-full mt-10 duration-400 hover:scale-120" />
      </div>
      <div className='flex align-center justify-center mt-7 duration-300'>
        <h1 className="font-bold text-2xl text-[#839496]"> Hi </h1>
      </div>
      <div className="flex flex-col items-center justify-center align-center text-center">
        <p className='flex flex-col w-2/5 text-[#839496]'>
          I am an open-source enthusiast and programmer with a passion for crafting elegant and efficient code and deeply committed to the principles of minimalism
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <button className="shadow-xl inset-ring-2 inset-ring-cyan-500/3 px-2 py-1 rounded-xl duration-400 hover:scale-120 bg-[#073642] hover:bg-[#2aa198] text-[#eee8d5] hover:text-[#eee8d5] hover:font-bold">
          <a href="#">Explore</a>
        </button>
        <button className="shadow-xl inset-ring-2 inset-ring-cyan-500/3 px-2 py-1 rounded-xl duration-400 hover:scale-120 bg-[#073642] hover:bg-[#2aa198] text-[#eee8d5] hover:text-[#eee8d5] hover:font-bold">
          <a href="#">Connect</a>
        </button>
      </div>
    </>
  );
}

export default Hero
