import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoPersonSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className='sticky top-0 shadow-lg flex justify-center items-center h-15 text-2xl text-[#839496] max-w-100/100 w-100/100 bg-[#073642]'>
        <div className='flex justify-between p-5 w-95/100 max-h-10'>

          {/*Left Side*/}
          <div className='flex item-center'>
            <p className='flex justify-center items-center duration-400 text-[#839496] hover:text-[#839496] hover:scale-120'>
              <a href='#home' className='flex justify-between items-center'>
                Amritxyz
              </a>
            </p>
          </div>

          {/*Right Side*/}
          <div className='flex item-center'>
            <ul className='flex justify-between gap-15 items-center'>
              <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'>
                <FaHome />
                <a href='#home' className='flex '>
                  Home
                </a>
              </li>
              <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'>
                <IoPersonSharp />
                <a href='#about' className='flex'>
                  About
                </a>
              </li>
              <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'>
                <IoMdContact />
                <a href='#skills' className='flex'>
                  Skills </a>
              </li>
              <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'>
                <MdMiscellaneousServices />
                <a href='#services' className='flex'>
                  Services </a>
              </li>
            </ul>
          </div>

        </div>
      </nav >
    </>
  );
}

export default Navbar;
