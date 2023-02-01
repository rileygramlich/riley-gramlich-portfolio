import React, {useRef, useState, useEffect} from "react";
import "./Projects.css"

export default function Projects() {
  const targetRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {;
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      })
      observer.observe(targetRef.current);
    }, []);

  const className = "Projects hidden " + (isVisible ? "show" : "") 
  return (
    <div ref={targetRef} className={className} id="projects">
      <h1 className="title">Projects</h1>
      <div className="project-container">
        <div className="project-details">
          <div className="details">
            <h3 className="project-name">Scribist</h3>
            <p className="project-description">
              A writing app to create and edit documents, write in Berserk mode, and test your typing speed.
            </p>
            <p className="project-skills">MERN Stack (React, Node.JS, ExpressJS, MongoDB), socket.io, API fetching</p>
            <p className="more-info">Click on the image for more info</p>
          </div>
          <div className="project-gif">
            <a href="https://github.com/rileygramlich/scribist" target='_blank'>
            <img src="https://github.com/rileygramlich/scribist/raw/main/public/img/doc-dark.png" alt="gif of checkers game" />
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
