import React from 'react';
import "./Greeting.css"
import {useSpring, animated} from "react-spring";

const Greeting = () => {

    const props = useSpring({
        to: {opacity: 1},
        from: {opacity: 0}
    })

    return (
            <animated.div style={props}>
                <h1 className="greeting">HEY, WHAT'S UP?</h1>
            </animated.div>
    );
};

export default Greeting;
