import React, { useContext } from "react"
import "./Header.css"
import "../../App.css"
import {SectionContext} from "../../contexts/SectionContext";

const Header = () => {
    const [section, setState] = useContext(SectionContext)
    return (
        <div className="header">
            <h1 className="cursor" onClick={() => setState(0)}> &lt; </h1>
            <h1 className="cursor" onClick={() => setState(1)}>WHO AM I</h1>
            <h1 className="cursor" onClick={() => setState(2)}>SKILLS</h1>
            <h1 className="cursor" onClick={() => setState(3)}>PROJECTS</h1>
            <h1 className="cursor" onClick={() => setState(4)}>CONTACT</h1>
        </div>
    )
}

export default Header