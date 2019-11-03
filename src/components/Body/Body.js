import React, { useContext, useEffect } from "react";
import {StateContext} from "../../contexts/StateContext";
import {useTransition, animated, config} from "react-spring";
import {Transition} from "react-spring/renderprops-universal";
import "./Body.css"
import Greeting from "../Greeting/Greeting";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Body = () => {

    const [id] = useContext(StateContext)

    const stages = [
        {id: 0, body: <Greeting/>},
        {id: 1, body: <Skills/>},
        {id: 2, body: <Projects/>},
        {id: 3, body: <Contact/>}
    ]

    const transition = useTransition(stages[id], item => item.id, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: config.molasses,
    })


    return transition.map(({item, props, key}) => (
                <animated.div key={key} style={props} className="body">
                    {item.body}
                </animated.div>
            ))
}

export default Body