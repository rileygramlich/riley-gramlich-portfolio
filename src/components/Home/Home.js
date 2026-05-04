import React, { useRef, useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
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

    const className = "Home hidden " + (isVisible ? "show" : "");

    return (
        <section ref={targetRef} className={className} id="home">
            <div className="intro-content">
                <p className="eyebrow">Software Developer</p>
                <h1 className="name">Riley Gramlich</h1>
                <h3 className="one-liner">
                    I build web apps, automation systems, and useful tools.
                </h3>
                <p className="description">
                    I like turning messy processes into simple workflows and
                    experimenting with the systems that make software feel
                    effortless to use.
                </p>
                <div className="hero-cta-group">
                    <a className="hero-cta" href="#projects">
                        View projects
                    </a>
                    <a className="hero-secondary-cta" href="#writing">
                        Read notes
                    </a>
                </div>
                <ul className="hero-points">
                    <li>Automation-first workflows</li>
                    <li>Full-stack prototyping</li>
                    <li>Linux and Docker experiments</li>
                </ul>
            </div>
        </section>
    );
}
