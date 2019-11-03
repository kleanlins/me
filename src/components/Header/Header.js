import React, { useContext } from "react"
import "./Header.css"
import {StateContext} from "../StateContext";

const Header = () => {
    const [state, setState] = useContext(StateContext)

    return (
        <div className="header">
            <h2>WHO AM I</h2>
            <h2>SKILLS</h2>
            <h2>PROJECTS</h2>
            <h2>CONTACT</h2>
        </div>
    )
}

export default Header

