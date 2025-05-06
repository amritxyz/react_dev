import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoPersonSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className='flex justify-between p-5 max-h-10 font-bold text-[] bg-[#073642]'>
        <div className='flex item-center'>
          <p className='flex justify-center items-center duration-400 text-[#839496] hover:text-[#839496] hover:scale-120'>
            <a href='#' className='flex justify-between items-center'>
              Amritxyz
            </a>
          </p>
        </div>
        <div className='flex item-center'>
          <ul className='flex justify-between gap-5 items-center'>
            <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'> <FaHome /> <a href='#' className='flex '> Home </a> </li>
            <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'> <IoPersonSharp /> <a href='#' className='flex'> About </a> </li>
            <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'> <IoMdContact /><a href='#' className='flex'> Contacts </a> </li>
            <li className='flex items-center gap-x-1 text-[#839496] hover:text-[#839496] duration-400 hover:scale-120'> <MdMiscellaneousServices /><a href='#' className='flex'> Services </a> </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
