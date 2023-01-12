import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="about">
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

        <div>
          <h3>Here are some things I excel at:</h3>
          <ul className="skills">
            <li className="skill">Javascript</li>
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">React</li>
            <li className="skill">MondoDB</li>
            <li className="skill">Express</li>
            <li className="skill">Node.js</li>
            <li className="skill">Python</li>
            <li className="skill">Django</li>
            <li className="skill">SQL</li>
            <li className="skill">PostgreSQL</li>
            <li className="skill">DevOps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
