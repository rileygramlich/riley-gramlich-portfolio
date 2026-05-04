import React, { useRef, useState, useEffect } from "react";
import "./Writing.css";

const currentFocus = [
    {
        title: "Automation-first systems",
        description:
            "Building workflows that remove repetitive manual steps before they become busywork.",
    },
    {
        title: "AI-assisted workflows",
        description:
            "Testing where LLMs help with research and drafting without breaking human oversight.",
    },
    {
        title: "Linux + Docker experiments",
        description:
            "Running small services and containers to keep my systems knowledge fresh.",
    },
];

export default function Writing() {
    const targetRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !isVisible) {
                setIsVisible(true);
            }
        });

        const currentTarget = targetRef.current;

        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const className = "Writing hidden " + (isVisible ? "show" : "");

    return (
        <section ref={targetRef} className={className} id="writing">
            <h1 className="title">Notes</h1>
            <p className="section-subtitle">
                A quick snapshot of what I am learning and experimenting with.
            </p>
            <div className="writing-grid">
                {currentFocus.map((item) => (
                    <article key={item.title} className="writing-card">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
