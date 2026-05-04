import React, { useRef, useState, useEffect } from "react";
import "./Clients.css";

const stackGroups = [
    {
        title: "Frontend",
        items: [
            "JavaScript",
            "TypeScript",
            "React",
            "HTML/CSS",
            "Component-driven UI",
            "Accessibility basics",
        ],
    },
    {
        title: "Backend",
        items: [
            "Node.js",
            "Express",
            "REST APIs",
            "PostgreSQL",
            "MongoDB",
            "Auth + sessions",
        ],
    },
    {
        title: "Automation + AI",
        items: [
            "n8n",
            "Python scripts",
            "LLM workflows",
            "Webhooks",
            "Prompt tooling",
            "Data ingestion",
        ],
    },
    {
        title: "Systems",
        items: [
            "Linux",
            "Docker",
            "Git",
            "CI/CD basics",
            "Nginx",
            "VPS deployments",
        ],
    },
];

export default function Clients() {
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

    const className = "Clients hidden " + (isVisible ? "show" : "");

    return (
        <section ref={targetRef} className={className} id="stack">
            <h1 className="title">Tech Stack</h1>
            <p className="section-subtitle">
                Tools and platforms I reach for when building and shipping.
            </p>

            <div className="client-grid">
                {stackGroups.map((group) => (
                    <article key={group.title} className="client-card">
                        <h3>{group.title}</h3>
                        <ul className="stack-list">
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
