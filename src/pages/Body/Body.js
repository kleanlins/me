import React, {useContext, useEffect, useState} from "react";
import {Transition} from "react-transition-group";
import {SectionContext} from "../../contexts/SectionContext"
import Greeting from "../../components/Greeting";
import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import "./Body.css"

const Body = () => {

    const [id] = useContext(SectionContext);

    const [transition, setTransition] = useState(false);
    const [section, setSection] = useState(<Greeting/>);

    const stages = [
        <Greeting/>,
        <Presentation/>,
        <Skills/>,
        <Projects/>,
        <Contact/>
    ];

    const transitionTime = 750

    useEffect(() => {
        setTransition(false);

        setTimeout(() => {
            setTransition(true)
        }, transitionTime);

        setTimeout(() => {
            setSection(stages[id])
        }, transitionTime)
    },[id]);

    const defaultStyle = {
        transition: `opacity ${transitionTime}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    return (
        <div className="grid body">
            <Transition in={transition} timeout={transitionTime}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]}}>
                        {section}
                    </div>)}
            </Transition>
        </div>
    )

};

export default Body;