import React from 'react'
import "./Industries.css"
import { IoSchool } from "react-icons/io5";
import { GiHealing } from "react-icons/gi";

const Industries = () => {
  return (
    <div className='container'>
        <div className='container left-sec '>
            <h1 className='ih1'>Powering Organisations acrosss <br/>
                Industries and Geographies
            </h1>
            <h3 className='ih3'>Zoom helps consolidate communications, connect people,
                and<br/> collaborate better together in the boardroom, classroom,<br/>
                operating room, and everywhere in between
            </h3>
        </div>
        <div className='container right-sec '>
            <div className='industries row '>
                <div className='box'>
                    <IoSchool />
                    <h2>Education</h2>
                </div>
                <div className='box'>
                    <GiHealing /> 
                    <h2>Health</h2>
                </div>
                <div className='box'>
                    <IoSchool />
                    <h2>Education</h2>
                </div>
                <div className='box'>
                    <GiHealing /> 
                    <h2>Health</h2>
                </div>
                <div className='box'>
                    <IoSchool />
                    <h2>Education</h2>
                </div>
                <div className='box'>
                    <GiHealing /> 
                    <h2>Health</h2>
                </div>
                
                
            </div>
        </div>
      
    </div>
  )
}

export default Industries
