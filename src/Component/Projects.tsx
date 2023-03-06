import React from "react";
import { style } from "../style";
import noteapp from "../assets/note.png";
import weather from "../assets/weather.png";
import stopwatch from "../assets/stopwatch.png";
import ecommerce from "../assets/ecommerce.png";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects: {
    title: string;
    image: string;
    githubUrl: string;
    demoUrl: string;
  }[] = [
    {
      title: "Notes",
      image: noteapp,
      githubUrl: "https://github.com/santoshchhn6/Notes-Reactjs",
      demoUrl: "https://santoshchhn6.github.io/Notes-Reactjs/",
    },
    {
      title: "Weather",
      image: weather,
      githubUrl: "https://github.com/santoshchhn6/Weather-App-Reactjs/",
      demoUrl: "https://santoshchhn6.github.io/Weather-App-Reactjs/",
    },
    {
      title: "Stopwatch",
      image: stopwatch,
      githubUrl:
        "https://github.com/santoshchhn6//Clock-Timer-Stopwatch-Reactjs",
      demoUrl: "https://santoshchhn6.github.io/Clock-Timer-Stopwatch-Reactjs/",
    },
    {
      title: "Ecommerce",
      image: ecommerce,
      githubUrl: "https://github.com/santoshchhn6/Ecommerce-React-Native",
      demoUrl: "https://github.com/santoshchhn6/Ecommerce-React-Native",
    },
  ];
  return (
    <div
      id="project"
      className=" flex flex-col items-center section max-sm:p-3"
    >
      <h2 className={`${style.heading}`}>Projects</h2>
      <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1 max-md:justify-center">
        {projects.map((p, i) => (
          <SingleProject
            key={i}
            image={p.image}
            title={p.title}
            github={p.githubUrl}
            demo={p.demoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
