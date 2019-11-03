import React, { useState, createContext } from "react";
import Greeting from "../components/Greeting/Greeting";

export const StateContext = createContext()

export const StateProvider = (props) => {
    const [state, setState] = useState(0)

    return (
        <StateContext.Provider value={[state, setState]}>
            {props.children}
        </StateContext.Provider>
    )
}