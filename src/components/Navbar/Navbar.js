import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar">
            <a className="navbar-brand" href="#home" onClick={closeMenu}>
                Gramlich Software Services
            </a>
            <button
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-wrapper ${isMenuOpen ? "open" : ""}`}>
                <ul className="navbar-links">
                    <li>
                        <a className="nav-link" href="#services" onClick={closeMenu}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#clients" onClick={closeMenu}>
                            Clients
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#projects" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#about" onClick={closeMenu}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#skills" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="#contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
                <a
                    className="nav-cta"
                    href="/pdfs/riley-gramlich-resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                >
                    Resume
                </a>
            </div>
        </nav>
    );
}
