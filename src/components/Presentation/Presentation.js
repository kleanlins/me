import React from 'react';
import { useSpring, animated } from "react-spring";

const Presentation = () => {

    const props = useSpring({
        to: {opacity: 1},
        from: {opacity: 0}
    })

    return (
        <animated.div style={props} className="presentation">
                <h1>
                    YOU CAN CALL ME CLEANDERSON.
                </h1>
                <h2 className="slim-text">I'm currently a Computer Engineering Bachelor student at Federal University of Paraiba - UFPB,
                    where my expertise areas are mostly focused on connecting pieces together, since the development of
                    a specific embedded device or a back end service, until it's front-end integration.
                </h2>
        </animated.div>

    );
};

export default Presentation;
