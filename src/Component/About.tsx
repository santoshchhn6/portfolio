import React from "react";
import image from "../assets/santosh.jpg";
import { style } from "../style";
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <div
      id="about"
      className="  flex flex-row items-center max-sm:flex-col max-sm:items-center sm:h-screen  section"
    >
      <div className=" w-[60%]  max-sm:w-[95%] max-sm:flex flex-col max-sm:text-center max-sm:mt-5 slidefromleft">
        <span className=" font-bold text-2xl text-gray-600 mb-3">Hello </span>
        <span className=" font-bold text-2xl text-gray-700 mb-3">I'am</span>
        <h1 className=" font-bold text-4xl text-blue-600 mb-3 text-gradient">
          SANTOSH CHAUHAN
        </h1>
        <h1 className=" font-bold text-xl text-gray-800 mb-10 ">
          Frontend Developer
        </h1>
        <p className=" text-lg font-bold text-gray-600 ">
          Seeking a fresher role in Frontend Development and explore my
          technical knowledge.
        </p>
        <div className="mt-10">
          <a href={resume}>
            <button className={`${style.btn}  `}>Resume</button>
          </a>
          <a href="#contact">
            <button className={`${style.btn2} `}>Contact Me</button>
          </a>
        </div>
      </div>
      <div className=" w-[40%] max-sm:w-[95%] m-3  flex justify-center slidefromright">
        <img
          src={image}
          alt=""
          className="w-[300px] h-[300px] object-cover  border-blue-600 rounded-full "
        />
      </div>
    </div>
  );
};

export default About;
