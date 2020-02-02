import React from 'react'
import {skills} from "../../static/skills";

const Skills = () => {
  return (
    <div>
      {skills.map(skill => (
        <div>
          <h2>{skill.spec}</h2>
          <h2 className="slim-text">{skill.stack}</h2>
        </div>
      ))}
    </div>
  )
};

export default Skills