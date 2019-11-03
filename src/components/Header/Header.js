import React, { useContext } from "react"
import "./Header.css"
import "../../App.css"
import {StateContext} from "../../contexts/StateContext";

const Header = () => {
    const [, setState] = useContext(StateContext)
    return (
        <div className="header">
            <h2 onClick={() => setState(0)}>WHO AM I</h2>
            <h2 onClick={() => setState(1)}>SKILLS</h2>
            <h2 onClick={() => setState(2)}>PROJECTS</h2>
            <h2 onClick={() => setState(3)}>CONTACT</h2>
        </div>
    )
}

export default Header