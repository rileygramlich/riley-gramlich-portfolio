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

    const skillGroups = [
        {
            title: "Frontend",
            items: [
                "React and JavaScript",
                "TypeScript",
                "Responsive UI architecture",
                "Component libraries and design systems",
            ],
        },
        {
            title: "Backend",
            items: [
                "Node.js and Express APIs",
                "Python automation services",
                "Authentication and role-based access",
                "Third-party integrations",
            ],
        },
        {
            title: "Data and Cloud",
            items: [
                "SQL and PostgreSQL",
                "REST data modeling",
                "Deployment and environment configuration",
                "Monitoring and operational support",
            ],
        },
        {
            title: "Delivery",
            items: [
                "Discovery and technical scoping",
                "Workflow automation with AI tooling",
                "Legacy system modernization",
                "Ongoing consulting and iteration",
            ],
        },
    ];

    return (
        <section ref={targetRef} className={className} id="about">
            <h1 className="title">About Me</h1>
            <div className="about-top">
                <div className="about-bio">
                    <p className="about-me">
                        I am Riley Gramlich, a Calgary-based software developer
                        focused on practical solutions for small and mid-sized
                        teams. My work blends product thinking with hands-on
                        engineering so projects ship quickly and stay
                        maintainable.
                    </p>
                    <p className="about-me about-me-secondary">
                        Whether the engagement is a new website, internal tool,
                        or process automation initiative, the goal is the same:
                        reduce friction, improve reliability, and give your team
                        systems they can confidently operate.
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
                <h3>What clients value most</h3>
                <ul>
                    <li>Clear timelines and straightforward communication</li>
                    <li>Solutions that fit real team workflows</li>
                    <li>Full-stack delivery from UI through backend</li>
                    <li>Modern tools without unnecessary complexity</li>
                    <li>Calgary and Alberta business context</li>
                </ul>
            </div>

            <div className="skills-contain">
                <h3 id="skills">Full-Stack Skills</h3>
                <div className="skills-columns">
                    {skillGroups.map((group) => (
                        <article key={group.title} className="skills-column">
                            <h4>{group.title}</h4>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
