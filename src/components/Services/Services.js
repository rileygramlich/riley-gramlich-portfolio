import React, { useRef, useState, useEffect } from "react";
import "./Services.css";

const services = [
    {
        title: "OpenClaw",
        subtitle: "AI + automation lab",
        description:
            "Exploring practical workflows that connect LLMs with real tasks, not just chat interfaces.",
    },
    {
        title: "n8n automations",
        subtitle: "Low-friction integrations",
        description:
            "Building repeatable automations that move data between tools and keep small systems in sync.",
    },
    {
        title: "AI-assisted workflows",
        subtitle: "Human-in-the-loop systems",
        description:
            "Testing where AI can speed up research, drafting, and ops without losing control of the outcome.",
    },
    {
        title: "Linux + Docker experiments",
        subtitle: "Server-side tinkering",
        description:
            "Running personal services, containers, and small deployments to stay sharp on infra basics.",
    },
    {
        title: "Web apps + internal tools",
        subtitle: "UI + backend delivery",
        description:
            "Shipping small web apps that are fast to maintain and focused on a single job.",
    },
    {
        title: "Client work (learning-focused)",
        subtitle: "Real-world systems",
        description:
            "Working on scoped projects when they teach me something about reliability, deployment, or UX.",
    },
];

export default function Services() {
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

    const className = "Services hidden " + (isVisible ? "show" : "");

    return (
        <section ref={targetRef} className={className} id="services">
            <h1 className="title">What I'm Working On</h1>
            <p className="section-subtitle">
                Active projects, experiments, and systems I am building or testing right now.
            </p>
            <div className="service-grid">
                {services.map((service) => (
                    <article key={service.title} className="service-card">
                        <p className="service-kicker">{service.subtitle}</p>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
