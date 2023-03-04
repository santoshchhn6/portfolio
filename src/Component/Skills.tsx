import React from "react";
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
import SingleSkill from "./SingleSkill";

const Skills = () => {
  const skills: [string, string, number][] = [
    ["HTML", html, 60],
    ["css", css, 75],
    ["Tailwind", tailwind, 50],
    ["Javascript", javascript, 80],
    ["Typescript", typescript, 63],
    ["Reactjs", reactjs, 72],
    ["React Native", reactjs, 55],
    ["Mongodb", mongodb, 50],
    ["Firebase", firebase, 50],
    ["Git", git, 58],
    ["Bash", git, 61],
    ["Docker", git, 65],
  ];
  return (
    <div
      id="skill"
      className=" bg-gray-600 flex flex-col items-center  section"
    >
      <h2 className={`${style.heading} text-white mt-10`}>Skills</h2>
      <div className="flex-1  p-3 mb-5  flex justify-around content-center flex-wrap gap-5">
        {skills.map((e, i) => (
          <SingleSkill key={i} title={e[0]} logo={e[1]} percentage={e[2]} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
