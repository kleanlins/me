import React  from 'react'

import {projects} from "../../static/projects";

const Projects = () => {
  return (
    <div>
      {projects.map(project => (
        <div>
          <a href={project.link}>
          <h1>{project.name}</h1>
          </a>
          <h2 className="slim-text">
            {project.description}
          </h2>
        </div>
      ))}
    </div>
  )
};

export default Projects;