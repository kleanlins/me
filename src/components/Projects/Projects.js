import React  from 'react'

const Projects = () => {

    return (
        <div>
            <a href='https://github.com/InsideCI/insideci.github.io'>
                <h1>CINSIDE</h1>
            </a>
            <h2 className="slim-text">
                CInside is a informational blog for the Center of Informatics at UFPB.
                The blog focuses on sharing knowledge, university statistics, projects opportunities and
                concentrating relevant data for everyone without relying on private social networks.
                It was written entirely using ReactJS.
            </h2>
            <br/>
            <a href='https://github.com/InsideCI/nego'>
                <h1>NEGO</h1>
            </a>
            <h2 className="slim-text">
                A public REST API developed mainly for the CInside project.
                Written in Golang and backed up by PostgreSQL, it has an structure focused on microservices
                capabilities.
            </h2>
            <br/>
            <a href='https://github.com/kleanlins/Baleasy'>
                <h1>BALEASY</h1>
            </a>
            <h2 className="slim-text">
                A complete system for helping you out with parking.
                Consists of sensors around the vehicle and an Android app for visual representation of your
                car "line sights".
            </h2>
            <br />
            <a href='https://github.com/kleanlins/bora'>
                <h1>BORA</h1>
            </a>
            <h2 className="slim-text">
                A real time data plotting software for the Formula UFPB student team.
                It's a complete analysis system composed by an embedded device for capturing data
                and a cross-platform software that receives data transmitted wirelessly.
            </h2>
        </div>
    )
}

export default Projects