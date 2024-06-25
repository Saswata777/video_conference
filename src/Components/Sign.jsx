import { useState } from 'react';
import { Link } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { VscAccount } from "react-icons/vsc";


// Functional component representing the sign-in form
const Sign = () => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // CSS classes based on dark mode state
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const inputBgColor = darkMode ? 'bg-gray-700' : 'bg-white';
  const inputBorderColor = darkMode ? 'border-gray-600' : 'border-gray-300';

  return (
    <div className={`${bgColor} font-sans min-h-screen flex flex-col items-center justify-center py-6 px-4`}>

      <div className="max-w-lg w-full">
        {/* <a href="javascript:void(0)">
          <img src="https://readymadeui.com/readymadeui.svg	" alt="logo" className="w-40 mb-8 mx-auto block" />
        </a> */}

        <div className={`p-8 rounded-2xl ${inputBgColor} shadow ${textColor}`}>
          <div className="justify-end" style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={toggleDarkMode} className={`px-3 py-1 rounded-full ${darkMode ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
              {darkMode ? <CiLight /> : <MdDarkMode />}
            </button>
          </div>
          <h2 className={`text-center text-2xl font-bold ${textColor}`}>Sign Up</h2>
          <form className="mt-8 space-y-4">
            <div className='flex gap-2 justify-between'>
              <div className='w-1/2'>
                <label className={`text-sm mb-2 block ${textColor}`}>First Name</label>
                <div className="relative flex items-center">
                  <input
                    name="firstname"
                    type="text"
                    required
                    className={`w-full text-sm border ${inputBorderColor} px-4 py-3 rounded-md outline-blue-600 ${textColor}`}
                    placeholder="Enter user name"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div className='w-1/2'>
                <label className={`text-sm mb-2 block ${textColor}`}>Last name</label>
                <div className="relative flex items-center">
                  <input
                    name="lastname"
                    type="text"
                    required
                    className={`w-full text-sm border ${inputBorderColor} px-4 py-3 rounded-md outline-blue-600 ${textColor}`}
                    placeholder="Enter user name"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className={`text-sm mb-2 block ${textColor}`}>User name</label>
              <div className="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  className={`w-full text-sm border ${inputBorderColor} px-4 py-3 rounded-md outline-blue-600 ${textColor}`}
                  placeholder="Enter user name"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div className='flex gap-2 justify-between'>
              <div className='w-1/2'>
                <label className={`text-sm mb-2 block ${textColor}`}>Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className={`w-full text-sm border ${inputBorderColor} px-4 py-3 rounded-md outline-blue-600 ${textColor}`}
                    placeholder="Enter password"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div className='w-1/2'>
                <label className={`text-sm mb-2 block ${textColor}`}>Confirm Password</label>
                <div className="relative flex items-center">
                  <input
                    name="confirmpassword"
                    type="password"
                    required
                    className={`w-full text-sm border ${inputBorderColor} px-4 py-3 rounded-md outline-blue-600 ${textColor}`}
                    placeholder="Enter password"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
            </div>


            <div className="!mt-8">
              <button type="button" className={`w-full flex justify-center font-semibold py-3 px-4 text-md tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none ${textColor}`}>
                <VscAccount className='mr-2 text-3xl'/> <span className='m-0.5'>SIGNUP </span>
              </button>

            </div>
            <div className='!mt-8 '>
              <button type="button" className={`w-full font-semibold justify-center flex py-3 px-4 text-md outline hover:outline-slate-400 tracking-wide rounded-lg text-black focus:outline-none ${textColor}`}>
              <FcGoogle className='mr-2  text-3xl'/> <span className='m-0.5'>SIGNUP WITH GOOGLE </span>
              </button>
            </div>

            <p className={`text-sm !mt-8 text-center ${textColor}`}>Already have an account? <Link to="/login" className={`text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold ${textColor}`}>Log in</Link></p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Sign;
