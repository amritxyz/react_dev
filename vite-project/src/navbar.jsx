import React from 'react';

const Navbar = () => {
  return (
    <>

      <nav className='p-5 text-[1.5rem]'>
        <div className='flex justify-between'>

          <div className='flex gap-7'>
            <a href='#' alt='musashi'
              className='h-10 w-10 text-white-500 rounded-full duration-200 ease-linear hover:text-blue-500 hover:scale-120'>
              Home
            </a>
          </div>

          <div>
            <ul className='flex gap-7'>
              <li className='duration-200 ease-linear hover:scale-120'>
                <a href='#'
                  className='text-white-500 hover:text-blue-500'>
                  About
                </a>
              </li>
              <li className='duration-200 ease-linear hover:text-blue-500 hover:scale-120'>
                <a href='#'
                  className='text-white-500 hover:text-blue-500'>
                  Contacts
                </a>
              </li>
              <li id='a' className='duration-200 ease-linear hover:text-blue-500 hover:scale-120'
              >
                <a href='#'
                  className='text-white-500 hover:text-blue-500'>
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
