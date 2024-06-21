import React from 'react';
import videoCall from '../Images/videoCall.jpeg';
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaMicrophone } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";



const Joinn = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={videoCall} alt='video call' style={{ width: '600px', height: 'auto' }} />
                
                <div className='flex justify-center mt-5 space-x-12'>
                
                  <button><HiMiniSpeakerWave className="w-10 h-auto"/></button>  
                   <button><MdCallEnd className="w-10 h-auto"/></button> 
                    <button><FaMicrophone className="w-10 h-auto"/></button>
                    
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center min-h-screen bg-white-100 grid-cols-{2}">
                    <div className="w-full max-w-md p-10 bg-white shadow-md">
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter room code"
                                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <button className="w-full px-4 py-3 font-semibold text-white bg-blue-600 rounded hover:bg-red-600">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Joinn;
