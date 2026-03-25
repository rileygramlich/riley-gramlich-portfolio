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
            "The marketing team needed a modern website experience with a clearer conversion flow and faster page delivery.",
        solution:
            "Partnered directly with marketing stakeholders to redesign content structure, simplify user journeys, and implement a modern, performance-first front-end.",
        impact: "Launched a cleaner, marketing-aligned website flow with high-speed page loads that improved usability and campaign readiness.",
    },
    {
        name: "Prairie.edu",
        image: prairieImage,
        website: "https://prairie.edu",
        challenge:
            "Marketing and communications teams needed a refreshed website flow that felt modern and performed quickly across devices.",
        solution:
            "Delivered contracting support to align design and page architecture with marketing goals, while optimizing assets and templates for speed.",
        impact: "Produced a modernized web experience with stronger flow, faster load times, and easier campaign execution for internal teams.",
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
