import React, { useState } from "react";
import { style } from "../style";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import bash from "../assets/bash.png";
import docker from "../assets/docker.png";
import SingleSkill from "./SingleSkill";
import {
  BsArrowRightCircleFill,
  BsArrowLeftCircleFill,
  BsX,
} from "react-icons/bs";

const arrowStyle =
  "text-4xl text-blue-600 ease-in-out duration-300 hover:text-blue-500 active:scale-95 cursor-pointer";

const Skills = () => {
  const skills: [string, string, number][] = [
    ["HTML", html, 80],
    ["css", css, 85],
    ["Tailwind", tailwind, 75],
    ["Javascript", javascript, 85],
    ["Typescript", typescript, 70],
    ["Reactjs", reactjs, 80],
    ["React Native", reactjs, 70],
    ["Mongodb", mongodb, 60],
    ["Firebase", firebase, 60],
    ["Git", git, 65],
    ["Bash", bash, 75],
    ["Docker", docker, 75],
  ];

  const [x, setX] = useState<number>(0);

  const handleLeft = () => {
    if (x >= 400) setX((x) => x - 400);
  };
  const handleRight = () => {
    if (x < (skills.length - 1) * 400) setX((x) => x + 400);
  };
  console.log(x);
  return (
    <div id="skill" className=" flex flex-col items-center  section">
      <h2 className={`${style.heading}  mt-10`}>Skills</h2>
      <div className=" flex items-center gap-3 ">
        <BsArrowLeftCircleFill
          className={`${arrowStyle}`}
          onClick={handleLeft}
        />
        <div className="w-[400px] overflow-hidden ">
          <div
            className="flex ease-in-out duration-500"
            style={{ transform: `translateX(-${x}px)` }}
          >
            {skills.map((e, i) => (
              <SingleSkill key={i} title={e[0]} logo={e[1]} percentage={e[2]} />
            ))}
          </div>
        </div>

        <BsArrowRightCircleFill
          className={`${arrowStyle}`}
          onClick={handleRight}
        />
      </div>
    </div>
  );
};

export default Skills;
