import React, { useRef, useState, useEffect } from "react";
import "./Projects.css";
import blockTimeImage from "../../imgs/Block-Time-1.png";
import internshipRadarImage from "../../imgs/Internship-radar.png";

const projects = [
    {
        name: "InternshipRadar",
        image: internshipRadarImage,
        what:
            "An AI-assisted internship discovery and application tracker with relevance scoring, alerts, and a status dashboard.",
        why:
            "Built to centralize scattered internship postings and reduce the manual effort of tracking applications.",
        stack: "Next.js, Node.js, Supabase (PostgreSQL), n8n, Discord Webhooks",
        decisions:
            "Used a layered MVC approach with event-driven workflows to keep scraping, scoring, and notifications asynchronous.",
        learned:
            "How to balance real-time discovery with a clean UI and keep job data deduplicated and searchable.",
        githubUrl: "https://github.com/rileygramlich/InternshipRadar",
        liveUrl: "https://internship-radar-ark.vercel.app/radar",
    },
    {
        name: "BlockTime",
        featured: false,
        image: blockTimeImage,
        what:
            "A scheduling and workload planner that turns scattered school tasks into a single weekly planning flow.",
        why:
            "Built to make assignment planning less chaotic and keep deadlines visible at a glance.",
        stack: "React, JavaScript, GitHub Pages",
        decisions:
            "Kept the data model small and focused the UI on weekly planning over feature depth.",
        learned:
            "How small UI changes improve planning behavior and how to keep state updates fast.",
        liveUrl: "https://rileygramlich.github.io/BlockTime/",
        githubUrl: "https://github.com/rileygramlich/BlockTime",
    },
    {
        name: "Scribist",
        image: "https://github.com/rileygramlich/scribist/raw/main/public/img/doc-dark.png",
        what:
            "A MERN-based writing platform with editing tools and a distraction-free layout.",
        why:
            "Built to support focused writing sessions while still enabling collaboration.",
        stack: "React, Node.js, Express, MongoDB",
        decisions:
            "Kept the editor surface central and separated content state from layout state.",
        learned:
            "Tradeoffs between collaboration features and keeping performance predictable.",
        liveUrl: "https://github.com/rileygramlich/scribist",
        githubUrl: "https://github.com/rileygramlich/scribist",
    },
    {
        name: "Glossa Galore",
        image: "https://github.com/rileygramlich/glossa-galore/raw/main/public/images/learn-1.png",
        what:
            "A language-learning platform with account management and structured community interactions.",
        why:
            "Built to make consistent practice easier by giving learners a lightweight community layer.",
        stack: "React, Node.js, MongoDB",
        decisions:
            "Used a simple content structure so the social layer stayed clear instead of noisy.",
        learned:
            "How to balance social features with a focused learning path.",
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
                Technical notes on what I built, why it exists, and what I learned.
            </p>
            <div className="project-container">
                {projects.map((project) => {
                    const hasLiveLink = Boolean(project.liveUrl);
                    const hasGithubLink = Boolean(project.githubUrl);
                    const hasLinks = hasLiveLink || hasGithubLink;

                    return (
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
                                    <strong>What it does:</strong> {project.what}
                                </p>
                                <p className="project-description">
                                    <strong>Why it was built:</strong> {project.why}
                                </p>
                                <p className="project-description">
                                    <strong>Tech stack:</strong> {project.stack}
                                </p>
                                <p className="project-description">
                                    <strong>Technical decisions:</strong> {project.decisions}
                                </p>
                                <p className="project-description">
                                    <strong>What I learned:</strong> {project.learned}
                                </p>
                                {hasLinks && (
                                    <div className="project-links">
                                        {hasLiveLink && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link primary"
                                            >
                                                Live
                                            </a>
                                        )}
                                        {hasGithubLink && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
