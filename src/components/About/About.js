import React, { useRef, useState, useEffect } from "react";
import headshot from "../../imgs/headshot.jpg";

import "./About.css";

export default function About() {
    const targetRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !isVisible) {
                setIsVisible(true);
            }
        });
        observer.observe(targetRef.current);
    }, [isVisible]);

    const className = "About hidden " + (isVisible ? "show" : "");

    return (
        <section ref={targetRef} className={className} id="about">
            <h1 className="title">About Me</h1>
            <div className="about-top">
                <div className="about-bio">
                    <p className="about-me">
                        I am Riley Gramlich, a Calgary-based software developer
                        who likes building systems that are simple, reliable,
                        and easy to evolve. I care about thoughtful interfaces,
                        clear data flow, and workflows that remove friction.
                    </p>
                    <p className="about-me about-me-secondary">
                        I am happiest when I am debugging a tricky edge case,
                        tightening up a workflow, or turning a messy process
                        into a tool that feels obvious to use.
                    </p>
                </div>

                <figure className="about-photo-panel">
                    <img
                        src={headshot}
                        alt="Riley Gramlich"
                        className="about-photo"
                    />
                </figure>
            </div>

            <div className="capability-list">
                <h3>How I work</h3>
                <ul>
                    <li>Start with the workflow and map the data first</li>
                    <li>Prefer small, composable systems over large rewrites</li>
                    <li>Automate the annoying parts before adding features</li>
                    <li>Write code that is easy to revisit months later</li>
                    <li>Ship in small steps and learn from real usage</li>
                </ul>
            </div>

            <div className="about-cta-group">
                <a
                    className="about-cta"
                    href="https://services.rileygramlich.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Work with me
                </a>
            </div>
        </section>
    );
}
