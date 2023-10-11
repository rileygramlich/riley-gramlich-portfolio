import React, {useRef, useState, useEffect} from "react";
import "./Home.css";

export default function Home() {
  const targetRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {;
        const entry = entries[0]
        setIsVisible(entry.isIntersecting)
      })
      observer.observe(targetRef.current);
    }, []);

  const className = "Home hidden " + (isVisible ? "show" : "") 

  return (
    <div ref={targetRef} className={className}>
      <div className="intro-content">
        <p className="intro">Hello, welcome to my porfolio! My name is</p>
        <h1 className="name">Riley Gramlich</h1>
        <h3 className="one-liner">
          I like to solve problems and build great apps
        </h3>
        <p className="description">
          I'm a Full Stack Software Developer interested in
          building useful software solutions
        </p>
      </div>
    </div>
  );
}
