import React, { useContext, useState } from "react";
import {SectionContext} from "../../contexts/SectionContext";
import {useSpring, animated, useTransition} from "react-spring";
import "./Body.css"
import Greeting from "../Greeting/Greeting";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Presentation from "../Presentation/Presentation";

const Body = () => {

    const [id] = useContext(SectionContext)

    const stages = [
        <Greeting/>,
        <Presentation/>,
        <Skills/>,
        <Projects/>,
        <Contact/>
    ]

    return (
        <div className="body grid">
            {stages[id]}
        </div>)

}

export default Body