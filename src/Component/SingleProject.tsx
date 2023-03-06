import React from "react";
import { style } from "../style";
type Props = {
  image: string;
  title: string;
  github: string;
  demo: string;
};
const SingleProject = ({ image, title, github, demo }: Props) => {
  return (
    <div className="w-[100%] bg-gray-400  rounded-xl p-4  overflow-hidden">
      <a href={demo}>
        <img
          className="w-[100%] aspect-[1.5] object-contain ease-in-out duration-300 hover:scale-105 cursor-pointer"
          src={image}
          alt={title}
        />
      </a>

      <div className=" flex justify-between items-center ">
        <span className=" text-white font-bold text-xl ">{title}</span>

        <div className="  flex">
          <a href={github}>
            <button className={`${style.btn}`}>Github</button>
          </a>
          <a href={demo}>
            <button className={`${style.btn2}`}>Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
