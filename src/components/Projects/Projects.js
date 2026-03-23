import React, { useRef, useState, useEffect } from "react";
import "./Projects.css";

const projects = [
    {
        name: "BlockTime",
        featured: true,
        image: null,
        problem:
            "Teams were losing time to fragmented scheduling and unclear availability.",
        solution:
            "Built a centralized planning experience that makes shift planning and resource visibility faster.",
        impact: "Reduced planning friction and improved scheduling clarity for day-to-day operations.",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        name: "Scribist",
        image: "https://github.com/rileygramlich/scribist/raw/main/public/img/doc-dark.png",
        problem:
            "Writers needed a distraction-free environment with real-time collaboration options.",
        solution:
            "Delivered a MERN-based writing platform with editing tools and performance-focused UX.",
        impact: "Improved writing focus while supporting collaborative content workflows.",
        liveUrl: "https://github.com/rileygramlich/scribist",
        githubUrl: "https://github.com/rileygramlich/scribist",
    },
    {
        name: "Glossa Galore",
        image: "https://github.com/rileygramlich/glossa-galore/raw/main/public/images/learn-1.png",
        problem:
            "Language learners needed a stronger community layer for consistent engagement.",
        solution:
            "Created a social language-learning platform with account management and structured interactions.",
        impact: "Helped users stay engaged and practice more consistently.",
        liveUrl: "https://github.com/rileygramlich/glossa-galore",
        githubUrl: "https://github.com/rileygramlich/glossa-galore",
    },
];

export default function Projects() {
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

    const className = "Projects hidden " + (isVisible ? "show" : "");
    return (
        <section ref={targetRef} className={className} id="projects">
            <h1 className="title">Projects</h1>
            <p className="section-subtitle">
                Selected work focused on operational efficiency, clearer
                workflows, and practical business impact.
            </p>
            <div className="project-container">
                {projects.map((project) => (
                    <article
                        key={project.name}
                        className={`project-details ${project.featured ? "project-featured" : ""}`}
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.name} app screenshot`}
                                className="project-media"
                            />
                        )}
                        <div className="details">
                            <p className="project-label">Case Study</p>
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">
                                <strong>Problem:</strong> {project.problem}
                            </p>
                            <p className="project-description">
                                <strong>Solution:</strong> {project.solution}
                            </p>
                            <p className="project-description">
                                <strong>Impact:</strong> {project.impact}
                            </p>
                            <div className="project-links">
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link primary"
                                >
                                    Live
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
