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
    <div className="rounded-xl w-[50%] bg-indigo-900  p-5">
      <img className=" rounded-lg mb-4" src={image} alt={title} />
      <span className="text-white font-bold text-xl ">{title}</span>
      <div className="mt-5 mb-3">
        <a className={`${style.btn}`} href={github}>
          Github
        </a>
        <a className={`${style.btn2}`} href={demo}>
          Demo
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
