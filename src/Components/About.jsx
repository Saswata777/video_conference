import React, { useState } from 'react';
import videoCall from '../Images/videoCall.jpeg';

const About = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      {/* Card 1 */}
      <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col items-center p-4">
          <img src={videoCall} alt="..." className="w-[300px] h-[300px] rounded-[60%] shadow-lg" />
          <h1 className="text-xl font-bold mt-4">Name</h1>
          <p className="mt-2 text-gray-600 text-center">write something</p>
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
      <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col items-center p-4">
          <img src={videoCall} alt="..." className="w-[300px] h-[300px] rounded-[60%] shadow-lg" />
          <h1 className="text-xl font-bold mt-4">Name</h1>
          <p className="mt-2 text-gray-600 text-center">write something</p>
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
      <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col items-center p-4">
          <img src={videoCall} alt="..." className="w-[300px] h-[300px] rounded-[60%] shadow-lg" />
          <h1 className="text-xl font-bold mt-4">Name</h1>
          <p className="mt-2 text-gray-600 text-center">write something</p>
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
      <div className="bg-[#cffafe] rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col items-center p-4">
          <img src={videoCall} alt="..." className="w-[300px] h-[300px] rounded-[60%] shadow-lg" />
          <h1 className="text-xl font-bold mt-4">Name</h1>
          <p className="mt-2 text-gray-600 text-center">write something</p>
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
  );
}

export default About;
