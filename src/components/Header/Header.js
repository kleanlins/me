import React, { useContext } from "react"
import "./Header.css"
import "../../App.css"
import {SectionContext} from "../../contexts/SectionContext";

const Header = () => {
    const [section, setState] = useContext(SectionContext)
    return (
        <div className="header">
            <a href="#" onClick={() => setState(0)}> &lt; </a>
            <a href="#" onClick={() => setState(1)}>WHO AM I</a>
            <a href="#" onClick={() => setState(2)}>SKILLS</a>
            <a href="#" onClick={() => setState(3)}>PROJECTS</a>
            <a href="#" onClick={() => setState(4)}>CONTACT</a>
        </div>
    )
}

export default Header