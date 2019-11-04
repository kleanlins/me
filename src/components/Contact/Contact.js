import React from 'react';
import {useSpring, animated} from "react-spring";

const Contact = () => {

    const props = useSpring({
        to: {opacity: 1},
        from: {opacity: 0}
    })

    return (
        <animated.div style={props}>
            <h1>You can find me on WhatsApp or Telegram:</h1>
            <h2 className='slim-text'>83 9 8210 3542</h2>
        </animated.div>
    );
};

export default Contact;
