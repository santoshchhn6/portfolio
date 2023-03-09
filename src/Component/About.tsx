import React from "react";
import image from "../assets/santosh.jpg";
import { style } from "../style";

const About = () => {
  return (
    <div
      id="about"
      className="  flex flex-row items-center max-sm:flex-col max-sm:items-center sm:h-screen  section"
    >
      <div className=" w-[60%]  max-sm:w-[95%] max-sm:flex flex-col max-sm:text-center max-sm:mt-5">
        <h2 className=" font-bold text-2xl text-gray-700 mb-3">Hello I'am</h2>
        <h1 className=" font-bold text-4xl text-blue-600 mb-10 text-gradient">
          SANTOSH CHAUHAN
        </h1>
        <p className=" text-lg font-bold text-gray-700 ">
          Seeking a fresher role in Frontend Development and explore my
          technical knowledge.
        </p>
        <div className="mt-10">
          <button className={`${style.btn}  `}>Resume</button>
          <button className={`${style.btn2} `}>Contact Me</button>
        </div>
      </div>
      <div className=" w-[40%] max-sm:w-[95%] m-3  flex justify-center">
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
