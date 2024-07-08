import React, { useState } from "react";
// import videoCall from "../Images/videoCall.jpeg";
import SaswataImg from "../Images/saswata.jpeg";
import SarbojitImg from "../Images/sarbojit.jpeg";
import SuvamImg from "../Images/subham.jpeg";
import SohamImg from "../Images/soham.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import "./About.css";
const About = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);

  return (
    <div className="col  m-auto justify-center">
      <div className="top">
        <h1 className="ah1 text-center text-gray-500">About Us</h1>
        <p className="aboutdetails mt-3 leading-7">
          Welcome to MeetUp, where we redefine the virtual meeting experience.
          Our state-of-the-art video conferencing app is designed to bring
          people together, no matter where they are. With crystal-clear video
          and audio, intuitive user interfaces, and a suite of collaborative
          tools, MeetUp makes every meeting seamless and productive. Whether
          you're connecting with colleagues, clients, or loved ones, our app
          ensures your conversations are engaging and effective.
          <br/>
          <br/>
           We are a team
          of four passionate MERN stack developers— <b>Saswata Maitra</b> , <b>Sarbojit
          Saha</b> ,<b>Suvam Manna</b> , and <b>Soham Mondal</b> —currently pursuing our B.Tech
          degrees in Electronics and Communication Engineering at Heritage
          Institute of Technology, Kolkata. During our internship, we
          collaborated to create an advanced multi-user video conferencing web
          app, MeetUp. This application not only facilitates seamless video
          communication but also incorporates real-time chat and screen sharing
          features, enhancing the overall user experience. Our goal is to
          develop innovative solutions that make remote communication more
          efficient and enjoyable. We are dedicated to leveraging our skills in
          the MERN stack to build robust and user-friendly applications, and we
          are excited to share our project with the world. 
          <br/>
          <br/>
          Join the MeetUp
          community today and discover a new level of connectivity
          and communication.
        </p>
      </div>
      <div className=" team gap-5  justify-center m-2 mr-2 ml-2">
        <div>
          <h1 className="ah1 justify-center text-[#0c4a6e]">Our Team</h1>
        </div>
        <div className="row justify-center gap-5">
          {/* Card 1 */}
          <div className=" shadow-custom bg-[#94a3b8] rounded-lg overflow-hidden w-1/4.5 ">
            <div className="flex flex-col items-center p-4">
              <img
                src={SaswataImg}
                alt="..."
                className="w-[250px] h-[250px] rounded-[60%] shadow-lg"
              />
              <h1 className="text-xl font-bold mt-4">Saswata</h1>
              <p className="mt-2 text-gray-600 text-center">Web Developer</p>
              {showMore1 && (
                <>
                  <p className="mt-2 text-gray-600 text-center">
                  MERN Stack Developer| ML Enthusiast |<br/>B.tech student at Heritage Institute of technology
                  </p>
                  <div className="links flex w-20 justify-between mt-3">
                    <div className="linkedin">
                      <a href="https://www.linkedin.com/in/saswata-maitra/">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="github">
                      <a href="https://github.com/Saswata777">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="gmail">
                      <a href="saswata.maitra07@gmail.com">
                        <CgMail />
                      </a>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={() => setShowMore1(!showMore1)}
                className="mt-4 bg-[#f3f4f6] text-[#1f2937] px-4 py-2 rounded hover:bg-slate-800 hover:text-[#f3f4f6]"
              >
                {showMore1 ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="shadow-custom bg-[#94a3b8] rounded-lg  overflow-hidden w-1/4.5">
            <div className="flex flex-col items-center p-4">
              <img
                src={SarbojitImg}
                alt="..."
                className="w-[250px] h-[250px] rounded-[60%] shadow-lg"
              />
              <h1 className="text-xl font-bold mt-4">Sarbojit</h1>
              <p className="mt-2 text-gray-600 text-center">Web Developer</p>
              {showMore2 && (
                <>
                  <p className="mt-2 text-gray-600 text-center">
                  Frontend Web Developer | UI/UX Enthusiast |<br/> B.tech Student at Heritage Institute of Technology
                  </p>
                  <div className="links flex w-20 justify-between mt-3">
                    <div className="linkedin">
                      <a href="https://www.linkedin.com/in/sarbojit-saha-808068248/">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="github">
                      <a href="https://github.com/SarbojitSaha">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="gmail">
                      <a href="sarbo.jit183@gmail.com">
                        <CgMail />
                      </a>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={() => setShowMore2(!showMore2)}
                className="mt-4 bg-[#f3f4f6] text-[#1f2937] px-4 py-2 rounded hover:bg-slate-800 hover:text-[#f3f4f6]"
              >
                {showMore2 ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="shadow-custom bg-[#94a3b8] rounded-lg  overflow-hidden w-1/4.5">
            <div className="flex flex-col items-center p-4">
              <img
                src={SuvamImg}
                alt="..."
                className="w-[250px] h-[250px] rounded-[60%] shadow-lg"
              />
              <h1 className="text-xl font-bold mt-4">Suvam</h1>
              <p className="mt-2 text-gray-600 text-center">Web Developer</p>
              {showMore3 && (
                <>
                  <p className="mt-2 text-gray-600 text-center">
                  Student at Heritage Institute of Technology 3rd Year
                  </p>
                  <div className="links flex w-20 justify-between mt-3">
                    <div className="linkedin">
                      <a href="https://www.linkedin.com/in/suvam-manna-a33592233/">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="github">
                      <a href="https://github.com/suvammanna">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="gmail">
                      <a href="suvammanna04@gmail.com">
                        <CgMail />
                      </a>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={() => setShowMore3(!showMore3)}
                className="mt-4 bg-[#f3f4f6] text-[#1f2937] px-4 py-2 rounded hover:bg-slate-800 hover:text-[#f3f4f6]"
              >
                {showMore3 ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="shadow-custom bg-[#94a3b8] rounded-lg  overflow-hidden w-1/4.5">
            <div className="flex flex-col items-center p-4">
              <img
                src={SohamImg}
                alt="..."
                className="w-[250px] h-[250px] rounded-[60%] shadow-lg"
              />
              <h1 className="text-xl font-bold mt-4">Sohom</h1>
              <p className="mt-2 text-gray-600 text-center">Web Developer</p>
              {showMore4 && (
                <>
                  <p className="mt-2 text-gray-600 text-center">
                  B tech in Electronics and Communication Engineering
                  </p>
                  <div className="links flex w-20 justify-between mt-3">
                    <div className="linkedin">
                      <a href="https://www.linkedin.com/in/soham-mondal-2542b4257/">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div className="github">
                      <a href="https://github.com/soham8167">
                        <FaGithub />
                      </a>
                    </div>
                    <div className="gmail">
                      <a href="sohammondal50285@gmail.com">
                        <CgMail />
                      </a>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={() => setShowMore4(!showMore4)}
                className="mt-4 bg-[#f3f4f6] text-[#1f2937] px-4 py-2 rounded hover:bg-slate-800 hover:text-[#f3f4f6]"
              >
                {showMore4 ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
