import React from 'react'
import {useSpring, animated} from "react-spring";

const Projects = () => {

    const props = useSpring({
        to: {opacity: 1},
        from: {opacity: 0}
    })

    return (
        <animated.div style={props}>
            <h1>CINSIDE</h1>
            <h2 className="slim-text">
                CInside is a informational blog for the Center of Informatics at UFPB.
                The blog focuses on sharing knowledge, university statistics, projects opportunities and
                concentrating relevant data for everyone without relying on private social networks.
                It was written entirely using ReactJS.
            </h2>
            <br/>
            <h1>NEGO</h1>
            <h2 className="slim-text">
                A public REST API developed mainly for the CInside project.
                Written in Golang and backed up by PostgreSQL, it has an structure focused on microservices
                capabilities.
            </h2>
            <br/>
            <h1>BALEASY</h1>
            <h2 className="slim-text">
                A complete system for helping you out with parking.
                Consists of sensors around the vehicle and an Android app for visual representation of your
                car "line sights".
            </h2>
        </animated.div>
    )
}

export default Projects