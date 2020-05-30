import "./Body.scss";

import React, { useContext } from "react";
import { animated, config, useTransition } from "react-spring";

import Contact from "../../components/Contact";
import Greeting from "../../components/Greeting";
import Presentation from "../../components/Presentation";
import Projects from "../../components/Projects";
import { SectionContext } from "../../contexts/SectionContext";
import Skills from "../../components/Skills";

const Body = () => {
  const [id] = useContext(SectionContext);

  const stages = [Greeting, Presentation, Skills, Projects, Contact];

  const transitions = useTransition(id, (p) => p, {
    from: {
      position: "absolute",
      opacity: 0,
      transform: "scale(1.2)",
    },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
    config: config.stiff,
  });

  return (
    <div className="body">
      {transitions.map(({ item, key, props }) => {
        return (
          <animated.div className={"animated"} key={key} style={props}>
            {stages[item]()}
          </animated.div>
        );
      })}
    </div>
  );
};

export default Body;
