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
    <div className=" w-[100%]">
      <div className="border-t border-l border-r border-blue-600  rounded-t-xl  overflow-hidden">
        <img
          className="w-[100%]  border-b border-blue-600"
          src={image}
          alt={title}
        />
        <p className=" text-gray-900 font-bold text-xl my-2 ml-5">{title}</p>
      </div>

      <div className="  flex">
        <a
          href={github}
          className="flex-1 z-10 text-center p-3 bg-blue-600 text-white font-bold rounded-bl-xl hover:bg-white   hover:text-gray-900 hover:border hover:border-gray-900"
        >
          Github
        </a>
        <a
          href={demo}
          className="flex-1 text-center p-3 text-blue-600 font-bold  border rounded-br-xl border-blue-600  hover:text-gray-900 hover:border-gray-900"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
