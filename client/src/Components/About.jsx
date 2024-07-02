import React, { useState } from 'react';
import videoCall from "../Images/videoCall.jpeg";
import "./About.css"
const About = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  return (
    <div className='col xxx m-auto justify-center'>
      <div className='top'>
        <h1  className='ah1 text-orange-300'>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className=" team gap-5  justify-center m-2 mr-2 ml-2">
      <div>
      <h1  className='ah1 justify-center text-blue-400'>Our Team</h1>
      </div>
      <div className='row justify-center gap-5'>
        {/* Card 1 */}
        <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden w-1/4.5 ">
          <div className="flex flex-col items-center p-4">
            <img src={videoCall} alt="..." className="w-[250px] h-[250px] rounded-[60%] shadow-lg" />
            <h1 className="text-xl font-bold mt-4">Saswata</h1>
            <p className="mt-2 text-gray-600 text-center">Web Developer</p>
            {showMore1 && (
              <p className="mt-2 text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            )}
            <button
              onClick={() => setShowMore1(!showMore1)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              {showMore1 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden w-1/4.5">
          <div className="flex flex-col items-center p-4">
            <img src={videoCall} alt="..." className="w-[250px] h-[250px] rounded-[60%] shadow-lg" />
            <h1 className="text-xl font-bold mt-4">Sarbojit</h1>
            <p className="mt-2 text-gray-600 text-center">Web Developer</p>
            {showMore2 && (
              <p className="mt-2 text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            )}
            <button
              onClick={() => setShowMore2(!showMore2)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              {showMore2 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden w-1/4.5">
          <div className="flex flex-col items-center p-4">
            <img src={videoCall} alt="..." className="w-[250px] h-[250px] rounded-[60%] shadow-lg" />
            <h1 className="text-xl font-bold mt-4">Suvam</h1>
            <p className="mt-2 text-gray-600 text-center">Web Developer</p>
            {showMore3 && (
              <p className="mt-2 text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            )}
            <button
              onClick={() => setShowMore3(!showMore3)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              {showMore3 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden w-1/4.5">
          <div className="flex flex-col items-center p-4">
            <img src={videoCall} alt="..." className="w-[250px] h-[250px] rounded-[60%] shadow-lg" />
            <h1 className="text-xl font-bold mt-4">Sohom</h1>
            <p className="mt-2 text-gray-600 text-center">Web Developer</p>
            {showMore4 && (
              <p className="mt-2 text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            )}
            <button
              onClick={() => setShowMore4(!showMore4)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              {showMore4 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div> 
      </div>
        
      </div>
    </div>

  );
}

export default About;
