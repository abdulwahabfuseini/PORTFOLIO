"use client";

import { useState } from "react";
import { PortFolio } from "./Data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleButton = (index) => {
    setToggleTab(index);
  };

  return (
    <div className="grid w-full h-full px-3 py-10 mx-auto mb-20 md:mb-80 lg:mb-20 max-w-7xl place-items-center">
      <h1 className="text-2xl sm:text-4xl">Portfolio</h1>
      <h3 className="py-2 text-xl capitalize sm:text-4xl">latest Projects</h3>
      <div className="grid grid-cols-2 gap-4 py-3 sm:grid-cols-4 ">
        <button
          onClick={() => toggleButton(1)}
          className={
            toggleTab === 1
              ? "bg-blue-800 ring-white text-white rounded-lg sm:text-xl shadow-lg ring-2 p-2"
              : "bg-white text-black rounded-lg p-2 text-lg"
          }
        >
          All Projects
        </button>
        <button
          onClick={() => toggleButton(2)}
          className={
            toggleTab === 2
              ? "bg-blue-800 ring-white text-white  rounded-lg sm:text-xl shadow-lg ring-2 p-2"
              : "bg-white text-black rounded-lg p-2 text-lg"
          }
        >
          Web Apps
        </button>
        <button
          onClick={() => toggleButton(3)}
          className={
            toggleTab === 3
              ? "bg-blue-800 ring-white text-white rounded-lg sm:text-xl shadow-lg ring-2 p-2"
              : "bg-white text-black rounded-lg p-2 text-lg"
          }
        >
          E-commerce
        </button>
        <button
          onClick={() => toggleButton(4)}
          className={
            toggleTab === 4
              ? "bg-blue-800 ring-white text-white rounded-lg sm:text-lg shadow-lg ring-2 p-2"
              : "bg-white text-black rounded-lg p-2 text-lg"
          }
        >
          Clone-Website
        </button>
      </div>
      <div className="w-full">
        {
          toggleTab === 1 && <div className="grid w-full gap-4 py-10 grid-auto-fit-xl ">{PortFolio.map(project => (
            <ProjectCard key={project.id}  project={project} />
          ))}</div>
        }
      </div>
      <div className="w-full">
        {
          toggleTab === 2 && <div className="grid w-full gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">{PortFolio.slice(0,2).map(project => (
            <ProjectCard key={project.id}  project={project} />
          ))}</div>
        }
      </div>
      <div className="w-full">
        {
          toggleTab === 3 && <div className="grid w-full gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">{PortFolio.slice(2,3).map(project => (
            <ProjectCard key={project.id}  project={project} />
          ))}</div>
        }
      </div>
      <div className="w-full">
        {
          toggleTab === 4 && <div className="grid w-full gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3 ">{PortFolio.slice(3,5).map(project => (
            <ProjectCard key={project.id}  project={project} />
          ))}</div>
        }
      </div>
    </div>
  );
};

export default Project;
