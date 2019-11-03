import React, { useState, createContext } from "react";

export const StateContext = createContext()

export const StateProvider = (props) => {
    const [state, setState] = useState(["greetings"])

    return (
        <StateContext.Provider value={[state, setState]}>
            {props.children}
        </StateContext.Provider>
    )
}