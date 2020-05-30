import React from "react";
import { projects } from "../../static/projects";

const Projects = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {projects.map((project) => (
        <div style={{ marginBottom: "2em" }}>
          <a href={project.link}>
            <h1>{project.name}</h1>
          </a>
          <h2 className="slim-text">{project.description}</h2>
        </div>
      ))}
    </div>
  );
};

export default Projects;
