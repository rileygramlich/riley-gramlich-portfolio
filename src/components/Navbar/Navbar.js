import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#home">
                Gramlich Software Services
            </a>
            <ul className="navbar-links">
                <li>
                    <a className="nav-link" href="#services">
                        Services
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#clients">
                        Clients
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#skills">
                        Skills
                    </a>
                </li>
                <li>
                    <a className="nav-link" href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
            <a
                className="nav-cta"
                href="/pdfs/riley-gramlich-resume.pdf"
                target="_blank"
                rel="noreferrer"
            >
                Resume
            </a>
        </nav>
    );
}
