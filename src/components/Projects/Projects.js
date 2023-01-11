import React from "react"

export default function Projects() {
    return (
        <div className="Projects">
            <h1 className="title">Projects</h1>
            <div className="project-details">
                <h3 className="project-name">Checkers</h3>
                <p className="project-description">A web-browser version of Checkers.</p>
                <p className="project-skills">HTML, CSS, JavaScript</p>
                <p className="more-info">Click on the image for more info</p>
                <img src="gif" alt="gif of checkers game" />
            </div>
            <div className="project-details">
                <h3 className="project-name">Glossa Galore</h3>
                <p className="project-description">A language learning social network.</p>
                <p className="project-skills">MEN stack. HTML, CSS, JavaScript</p>
                <p className="more-info">Click on the image for more info</p>
                <img src="gif" alt="gif of checkers game" />
            </div>
            <div className="project-details">
                <h3 className="project-name">Know Me?</h3>
                <p className="project-description">A build your own quiz and test your friends and famliy app.</p>
                <p className="project-skills">Django, Python, PostgreSQL</p>
                <p className="more-info">Click on the image for more info</p>
                <img src="gif" alt="gif of checkers game" />
            </div>
        </div>
    )
}