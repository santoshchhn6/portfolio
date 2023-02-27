import React from "react";
import { style } from "../style";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import git from "../assets/git.png";
import SingleSkill from "./SingleSkill";

const Skills = () => {
  const skills: string[][] = [
    ["HTML", html],
    ["css", css],
    ["Tailwind", tailwind],
    ["Javascript", javascript],
    ["Reactjs", reactjs],
    ["Mongodb", mongodb],
    ["Firebase", firebase],
    ["Git", git],
  ];
  return (
    <div>
      <h2 className={`${style.heading}`}>Skills</h2>
      {skills.map((e, i) => (
        <SingleSkill key={i} logo={e[1]} title={e[0]} />
      ))}
    </div>
  );
};

export default Skills;
