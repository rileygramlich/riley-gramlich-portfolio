import React, {useRef, useState, useEffect} from "react";

import "./About.css";

import headshot from '../../imgs/headshot.jpg'

export default function About() {
  const targetRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {;
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      })
      observer.observe(targetRef.current);
    }, []);

  const className = "About hidden " + (isVisible ? "show" : "") 

  return (
    <div ref={targetRef} className={className} id="about">
      <h1 className="title">About Me</h1>
      <div className="about-content">
        <div className="bit">
          <h3 className="about-me">A bit about me:</h3>
          <p className="about-me">
            I am a full stack web developer with a drive to bring useful web
            applications to people that improve their lives by building
            efficient user experiences. I am passionate and motivated to work on
            problems that improve and progress the lives of people. I would love
            to work on Artificial General Intelligence in the future and/or
            contribute to humanity’s exploration of Space.
          </p>
        </div>

        <div className="pic-container">
          <img src={headshot} alt="photo of me" className="headshot"/>
        </div>
      </div>

        <div className="skills-contain">
          <h3>Here are some things I excel at:</h3>
          <ul className="skills">
            <li className="skill">JavaScript</li>
            <li className="skill">TypeScript</li>
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">MERN Stack</li>
            <li className="skill">MondoDB</li>
            <li className="skill">Express</li>
            <li className="skill">ReactJS</li>
            <li className="skill">Node.js</li>
            <li className="skill">Python</li>
            <li className="skill">Django</li>
            <li className="skill">SQL</li>
            <li className="skill">PostgreSQL</li>
            <li className="skill">Git/GitHub</li>
            <li className="skill">RESTful APIs</li>
            <li className="skill">DevOps</li>
            <li className="skill">Linux</li>
          </ul>
        </div>
    </div>
  );
}
