import React, { useRef, useState, useEffect } from "react";
import "./Services.css";

const services = [
    {
        title: "Web Development",
        subtitle: "Full-stack web development",
        description:
            "Design and build production-ready web platforms across frontend, backend APIs, and data layers, with WordPress/Elementor available when they are the right fit.",
    },
    {
        title: "Automation and AI Workflows",
        subtitle: "Reduce repetitive admin work",
        description:
            "Connect your tools and automate repeatable tasks so your team spends less time on manual processes and more time on high-value work.",
    },
    {
        title: "Systems Modernization",
        subtitle: "Upgrade aging software",
        description:
            "Replace fragile legacy workflows with stable, maintainable systems that scale with your operations.",
    },
    {
        title: "Consulting and Contracting",
        subtitle: "Reliable delivery support",
        description:
            "Bring in focused technical leadership for scoped projects, process improvements, or ongoing product support.",
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
            <h1 className="title">Services</h1>
            <p className="section-subtitle">
                Practical consulting and implementation support for small and
                mid-sized businesses across Calgary and Alberta.
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
