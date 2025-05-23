import React from "react";
import Musashi from "./assets/musashi.png";

const About = () => {
  return (
    <>
      <div id='about' className="max-w-100/100 w-100/100 flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <p className="mb-20 font-bold text-5xl text-[#839496]">
              About Me
              <span className="block h-1 w-24 bg-[#268bd2] mx-auto mt-2 rounded"></span>
            </p>
          </div>

          <div className="flex items-center justify-center mx-100 gap-20">
            <div className="flex items-center justify-center max-w-50/100">
              <img src={Musashi} className="shadow-lg shadow-cyan-500/30 ring-3 ring-cyan-500/30 rounded-[1rem] h-100 duration-400 " />
            </div>
            <div className="flex align-top justify-center max-w-50/100">
              <div>
                {/*<p className="flex align-top text-[#268bd2] text-3xl">*/}
                <p className="flex align-top text-[#2aa198] text-3xl">
                  React Developer
                </p>
                <p className="flex text-[#839496] text-2xl mt-3">
                  My primary programming language is Javascript, which I use to create software that is both reliable and performant.
                  My expertise lies in designing solutions that are straightforward ensuring that they are easy to maintain.
                </p>
                <div className="text-[#839496] text-white">
                  <div className="text-2xl flex justify-between my-5">
                    <div className="flex flex-col">
                      <span className="text-[#2aa198]">
                        Name:
                      </span>
                      <span className="text-[#eee8d5]">
                        Miamoto Musashi
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#2aa198]">
                        Email:
                      </span>
                      <span className="text-[#eee8d5]">
                        Myura@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-[#2aa198]">
                        Address:
                      </span>
                      <span className="text-[#eee8d5]">
                        Miamoto Village
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#2aa198]">
                        Status:
                      </span>
                      <span className="text-[#eee8d5]">
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
