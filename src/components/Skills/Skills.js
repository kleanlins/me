import React from 'react'
import {useSpring, animated} from "react-spring";

const Skills = () => {

    const props = useSpring({
        to: {opacity: 1},
        from: {opacity: 0}
    })

    return (
        <animated.div style={props}>
            <div>
                <h2>BACK END</h2>
                <h2 className="slim-text">Golang, Docker, SQL</h2>
            </div>
            <div>
                <h2>FRONT END</h2>
                <h2 className="slim-text">React, Vue</h2>
            </div>
            <div>
                <h2>EMBEDDED SYSTEMS</h2>
                <h2 className="slim-text">PIC, Arduino</h2>
            </div>
            <div>
                <h2>MOBILE</h2>
                <h2 className="slim-text">Kotlin</h2>
            </div>
            <div>
                <h2>GENERAL PURPOSE</h2>
                <h2 className="slim-text">C++, Python</h2>
            </div>
        </animated.div>
    )
}

export default Skills