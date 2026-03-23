import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import headshot from "../../imgs/headshot.jpg";

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
                <p className="eyebrow">
                    Serving Calgary and Alberta businesses
                </p>
                <h1 className="name">
                    Modern software systems that save your team hours every
                    week.
                </h1>
                <h3 className="one-liner">
                    Gramlich Software Services helps local organizations
                    streamline operations, modernize outdated tools, and launch
                    websites that convert.
                </h3>
                <p className="description">
                    From WordPress and Elementor websites to automation
                    workflows and legacy system modernization, every project is
                    built for measurable business outcomes.
                </p>
                <div className="hero-cta-group">
                    <a className="hero-cta" href="#contact">
                        Contact Us
                    </a>
                    <a className="hero-secondary-cta" href="#clients">
                        See Client Work
                    </a>
                </div>
                <ul className="hero-points">
                    <li>Faster admin workflows</li>
                    <li>Lower ongoing maintenance cost</li>
                    <li>Clear communication for non-technical teams</li>
                </ul>
            </div>
            <div className="hero-photo-wrap">
                <img
                    src={headshot}
                    alt="Riley Gramlich"
                    className="hero-photo"
                />
            </div>
        </section>
    );
}
