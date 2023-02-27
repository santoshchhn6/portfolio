import React from "react";
import image from "../assets/santosh.jpg";
import { style } from "../style";

const About = () => {
  return (
    <div className="mt-10 flex flex-row max-sm:flex-col max-sm:items-center ">
      <div className=" w-[60%]  max-sm:w-[95%] max-sm:flex flex-col max-sm:text-center">
        <h2 className=" font-bold text-2xl text-gray-700">Hello I'am</h2>
        <h1 className=" font-bold text-4xl text-blue-600">SANTOSH CHAUHAN</h1>
        <p className=" text-lg font-bold text-gray-700">
          Seeking a fresher role in Frontend Development and explore my
          technical knowledge.
        </p>
        <div className="mt-3">
          <button
            className={`${style.btn} bg-gradient-to-r from-cyan-600 to-blue-600  text-white `}
          >
            Resume
          </button>
          <button
            className={`${style.btn} border border-blue-600  text-blue-600 `}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className=" w-[40%] max-sm:w-[95%] m-3  flex justify-center">
        <img
          src={image}
          alt=""
          className="w-[300px] h-[300px] object-cover border rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
