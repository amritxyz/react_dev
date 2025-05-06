import React from 'react';
import Musashi from '../../2-home/src/assets/musashi.png';

function Form() {
  return (
    <section className="flex min-h-screen">
      <img src={Musashi} className='w-[50%] h-screen' />

      <div className="w-1/2 flex items-center justify-center bg-gray-900 text-white p-10">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold mb-6">Login</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-1">Username</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 rounded-md font-semibold"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              className="w-full py-2 border border-white hover:bg-white hover:text-black rounded-md"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
