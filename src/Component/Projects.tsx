import React from "react";
import { style } from "../style";
import noteapp from "../assets/note.png";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects: {
    title: string;
    image: string;
    githubUrl: string;
    demoUrl: string;
  }[] = [{ title: "Note App", image: noteapp, githubUrl: "", demoUrl: "" }];
  return (
    <div className="section">
      <h2 className={`${style.heading}`}>Projects</h2>
      <div>
        <SingleProject
          image={noteapp}
          title="Note App"
          github="https://github.com/santoshchhn6/Notes-Reactjs"
          demo="https://santoshchhn6.github.io/Notes-Reactjs/"
        />
      </div>
    </div>
  );
};

export default Projects;
