import React from "react";
import { style } from "../style";
import noteapp from "../assets/note.png";
import weather from "../assets/weather.png";
import stopwatch from "../assets/stopwatch.png";
import ecommerce from "../assets/ecommerce.jpg";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects: {
    title: string;
    image: string;
    githubUrl: string;
    demoUrl: string;
  }[] = [
    {
      title: "Note App",
      image: noteapp,
      githubUrl: "https://github.com/santoshchhn6/Notes-Reactjs",
      demoUrl: "https://santoshchhn6.github.io/Notes-Reactjs/",
    },
    {
      title: "Weather App",
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
    <div className=" flex flex-col items-center section">
      <h2 className={`${style.heading}`}>Projects</h2>
      <div className="flex flex-col gap-20">
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
