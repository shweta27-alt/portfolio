import React from "react";
import { PROJECTS } from "../constants";

function Project() {
  return (
    <div className="border-b border-pink-300 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
              
              <p className="mb-4 text-purple-800">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 tech-sm font-medium text-purple-500">
                  {tech}
                </span>
              ))}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;