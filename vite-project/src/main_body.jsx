import React from 'react'
import musashiPic from './assets/musashi.png'

const Main_body = () => {
  return (
    <>
      <body className='max-h-9/10'>
        <div className='flex justify-center items-center h-fit'>
          <img src={musashiPic}
            className='place-self-center h-50 w-50 rounded-full duration-300 transition-all mt-20
    ease-linear hover:duration-300 hover:scale-130' />
        </div>
        <div className='max-h-full max-w-full w-full h-full text-center flex flex-column justify-center items-center mt-15 text-2xl'>
          <div className='text-center flex-column justify-center items-center'>
            <p className='text-3xl'>
              Hi!
            </p>
            <div className='max-w-full max-w-full flex flex-col justify-center items-center'>
              <p className='text-center max-w-3/4 flex-col mt-3'>
                I am an open-source enthusiast and programmer with a passion for crafting elegant and efficient code and deeply committed to the principles of minimalism
              </p>
              <p className='mt-3'>Now i am thinking about farming&hellip;</p>
            </div>
          </div>
        </div>
      </body >
    </>
  );
}

export default Main_body
