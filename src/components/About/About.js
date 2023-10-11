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
          <p className="about-me">
          Hi, I'm Riley Gramlich, a dedicated software developer with a passion for crafting innovative solutions. I bring a wealth of experience in full-stack development and expertise in a variety of technologies, from JavaScript to .NET. My commitment to excellence is matched by my ability to collaborate effectively with diverse teams, delivering outstanding results. I'm self-motivated, hardworking, and deeply value honesty and trustworthiness. I'm excited about the opportunity to contribute to impactful projects and create efficient, user-friendly applications. Let's explore the possibilities of working together and making a meaningful impact through innovative software solutions.

Feel free to reach out if you'd like to connect or learn more about my professional journey. 
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
            <li className="skill">C#</li>
            <li className="skill">ASP.NET</li>
          </ul>
        </div>
    </div>
  );
}
