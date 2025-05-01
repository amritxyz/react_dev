import React from "react";
import Musashi from "./assets/musashi.png";

const About = () => {
  return (
    <>
      <div id='about' className="max-w-100/100 w-100/100 flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <p className="flex items-center justify-center">
            <h1 className="mb-20 font-bold text-5xl text-[#839496]">
              About Me
              <hr className="text-blue-500 w-30 flex align-center items-center justify-center mx-auto" />
            </h1>
          </p>

          <div className="flex items-center justify-center mx-100 gap-20">
            <div className="flex items-center justify-center max-w-50/100">
              <img src={Musashi} className="shadow-lg shadow-cyan-500/30 ring-3 ring-cyan-500/30 rounded-[1rem] h-90 duration-400 " />
            </div>
            <div className="flex align-top justify-center max-w-50/100">
              <div>
                <p className="flex align-top text-[#268bd2] text-3xl">
                  React Developer
                </p>
                <p className="flex text-[#839496] text-2xl mt-3">
                  My primary programming language is Javascript, which I use to create software that is both reliable and performant.
                  My expertise lies in designing solutions that are straightforward ensuring that they are easy to maintain.
                </p>
                <div className="text-[#839496] text-white">
                  <div className="text-2xl flex justify-between my-5">
                    <div className="flex flex-col">
                      <span className="text-[#268bd2]">
                        Name:
                      </span>
                      <span>
                        Miamoto Musashi
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#268bd2]">
                        Email:
                      </span>
                      <span>
                        Myura@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-[#268bd2]">
                        Address:
                      </span>
                      <span>
                        Miamoto Village
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#268bd2]">
                        Status:
                      </span>
                      <span>
                        Busy
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex align-left justify-left gap-3 mt-5">
                  <a href="#" className="shadow-xl ring-2 ring-cyan-500/30 px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-110 bg-[#073642] text-[#839496] text-2xl hover:bg-[#2aa198] hover:text-[#eee8d5]">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
