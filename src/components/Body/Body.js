import React, { useContext, useEffect, useState } from "react";
import {SectionContext} from "../../contexts/SectionContext";
import "./Body.css"
import Greeting from "../Greeting/Greeting";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Presentation from "../Presentation/Presentation";
import {Transition} from "react-transition-group";

const Body = () => {

    const [id] = useContext(SectionContext)
    const [state, setState] = useState(false)
    const [section, setSection] = useState(<Greeting/>)

    const stages = [
        <Greeting/>,
        <Presentation/>,
        <Skills/>,
        <Projects/>,
        <Contact/>
    ]

    const transitionTime = 1000

    useEffect(() => {
        setState(false)
        setTimeout(() => {
            setState(true)
        }, transitionTime)
        setTimeout(() => {
            setSection(stages[id])
        }, transitionTime)
    },[id])

    const defaultStyle = {
        transition: `opacity ${transitionTime}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    return (
        <div className="grid body">
            <Transition in={state} timeout={transitionTime}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]}}>
                        {section}
                    </div>)}
            </Transition>
        </div>
    )

}

export default Body