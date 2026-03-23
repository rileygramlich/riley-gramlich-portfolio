import React, { useRef, useState, useEffect } from "react";
import "./Clients.css";
import urbanTecImage from "../../imgs/UrbanTec-1.png";
import prairieImage from "../../imgs/prairie-1.png";

const clientWork = [
    {
        name: "UrbanTec Condominium Management Inc",
        image: urbanTecImage,
        website: "https://urbantec.ca",
        challenge:
            "Needed clearer operations workflows and modern tooling to reduce coordination overhead.",
        solution:
            "Delivered contracting support focused on process improvements and modernization planning.",
        impact: "Impact metric placeholder: add measurable improvement once finalized.",
    },
    {
        name: "Prairie.edu",
        image: prairieImage,
        website: "https://prairie.edu",
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
                        <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${client.name}`}
                        >
                            <img
                                src={client.image}
                                alt={`${client.name} website screenshot`}
                                className="client-screenshot"
                            />
                        </a>
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
                        <a
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="client-link"
                        >
                            Visit Site
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
