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
import github from "../assets/github.png";
import bash from "../assets/bash.png";
import docker from "../assets/docker.png";
import {
  BsArrowRightCircleFill,
  BsArrowLeftCircleFill,
  BsX,
} from "react-icons/bs";

const arrowStyle =
  "text-4xl text-blue-600 ease-in-out duration-300 hover:text-blue-500 active:scale-95 cursor-pointer";

const Skills = () => {
  const skills: [string, string, number, string][] = [
    ["HTML", html, 80, "https://developer.mozilla.org/en-US/docs/Web/HTML"],
    ["css", css, 85, "https://developer.mozilla.org/en-US/docs/Web/CSS"],
    ["Tailwind", tailwind, 75, "https://tailwindcss.com/"],
    [
      "Javascript",
      javascript,
      85,
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    ["Typescript", typescript, 70, "https://www.typescriptlang.org/"],
    ["Reactjs", reactjs, 80, "https://reactjs.org/"],
    ["React Native", reactjs, 70, "https://reactnative.dev/"],
    ["Mongodb", mongodb, 60, "https://www.mongodb.com/"],
    ["Firebase", firebase, 60, "https://firebase.google.com/"],
    ["Github", github, 65, "https://github.com/"],
    ["Git", git, 65, "https://git-scm.com/"],
    ["Bash", bash, 75, "https://www.gnu.org/software/bash/"],
    ["Docker", docker, 75, "https://www.docker.com/"],
  ];

  return (
    <div id="skill" className=" flex flex-col items-center max-sm:p-3 section">
      <h2 className={`${style.heading} `}>Skills</h2>

      <div className=" flex-1 flex content-center justify-center flex-wrap gap-10">
        {skills.map((e, i) => (
          <a
            key={i}
            href={e[3]}
            className="w-[120px] h-[140px] bg-gray-200 rounded-xl flex flex-col justify-center items-center  p-3 ease-in-out duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              key={i}
              src={e[1]}
              alt=""
              className=" w-[60px] aspect-square object-contain mb-3"
            />
            <p className="text-center font-bold text-gray-700">{e[0]}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
