import React from "react";
import "./Projects.css"

export default function Projects() {
  return (
    <div className="Projects hidden" id="projects">
      <h1 className="title">Projects</h1>
      <div className="project-container">
        <div className="project-details">
          <div className="details">
            <h3 className="project-name">Checkers</h3>
            <p className="project-description">
              A web-browser version of Checkers.
            </p>
            <p className="project-skills">HTML, CSS, JavaScript</p>
            <p className="more-info">Click on the image for more info</p>
          </div>
          <div className="project-gif">
            <a href="https://github.com/rileygramlich/checkers" target='_blank'>
            <img src="https://github.com/rileygramlich/checkers/blob/main/img/Screenshot2.png?raw=true" alt="gif of checkers game" />
            </a>
          </div>
        </div>
        <div className="project-details">
          <div className="details">
            <h3 className="project-name">Glossa Galore</h3>
            <p className="project-description">
              A language learning social network.
            </p>
            <p className="project-skills">HTML, CSS, JavaScript, Node.JS, ExpressJS, MongoDB, Mongoose, Google OAuth</p>
            <p className="more-info">Click on the image for more info</p>
          </div>
          <div className="project-gif">
            <a href="https://github.com/rileygramlich/glossa-galore" target='_blank'>
            <img src="https://github.com/rileygramlich/glossa-galore/raw/main/public/images/learn-1.png" alt="gif of checkers game" />
            </a>
          </div>
        </div>
        <div className="project-details">
          <div className="details">
            <h3 className="project-name">Know Me?</h3>
            <p className="project-description">
              A build your own quiz and test your friends and famliy app.
            </p>
            <p className="project-skills">Django, Python, PostgreSQL</p>
            <p className="more-info">Click on the image for more info</p>
          </div>
          <div className="project-gif">
            <a href="https://github.com/rileygramlich/knowme_app" target='_blank'>
            <img src="https://github.com/rileygramlich/knowme_app/raw/main/screenshots/createquestion.jpeg" alt="gif of checkers game" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
