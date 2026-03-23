import React, { useRef, useState, useEffect } from "react";
import "./Clients.css";

const clientWork = [
    {
        name: "UrbanTec Condominium Management Inc",
        challenge:
            "Needed clearer operations workflows and modern tooling to reduce coordination overhead.",
        solution:
            "Delivered contracting support focused on process improvements and modernization planning.",
        impact: "Impact metric placeholder: add measurable improvement once finalized.",
    },
    {
        name: "Prairie.edu",
        challenge:
            "Required scalable digital delivery support while keeping workflows simple for non-technical teams.",
        solution:
            "Implemented practical systems and web improvements aligned with day-to-day staff operations.",
        impact: "Impact metric placeholder: add measurable improvement once finalized.",
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
        <section ref={targetRef} className={className} id="clients">
            <h1 className="title">Contracting and Client Work</h1>
            <p className="section-subtitle">
                Trusted by local organizations that value practical execution
                and measurable operational improvements.
            </p>

            <div className="client-grid">
                {clientWork.map((client) => (
                    <article key={client.name} className="client-card">
                        <div className="client-screenshot" aria-hidden="true">
                            Screenshot placeholder
                        </div>
                        <h3>{client.name}</h3>
                        <p>
                            <strong>Challenge:</strong> {client.challenge}
                        </p>
                        <p>
                            <strong>Solution:</strong> {client.solution}
                        </p>
                        <p>
                            <strong>Impact:</strong> {client.impact}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
