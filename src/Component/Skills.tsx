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
  ];
  return (
    <div>
      <h2 className={`${style.heading}`}>Skills</h2>
      <div className="grid grid-cols-2  max-sm:grid-cols-1 gap-2 ">
        {skills.map((e, i) => (
          <SingleSkill key={i} title={e[0]} logo={e[1]} percentage={e[2]} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
