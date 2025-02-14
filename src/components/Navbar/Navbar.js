import React from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a className="navbar-brand" href="#">
                    RG
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#projects">
                                Projects{" "}
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item active resume">
                            <a
                                className="nav-link"
                                id="resume"
                                href="./pdfs/riley-gramlich-resume.pdf"
                                download="riley-gramlich-resume.pdf"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text socials">
                        <ul className="navbar-nav mr-auto socials">
                            <li className="nav-item ">
                                <a
                                    className="nav-link"
                                    href="https://github.com/rileygramlich"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.linkedin.com/in/rileygramlich/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                    <i className="fa-regular fa-house"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://x.com/rileygramlich"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaXTwitter />
                                </a>
                            </li>
                        </ul>
                    </span>
                </div>
            </nav>
        </>
    );
}
