import React from "react"

export default function Header() {
    return (
        <div className="Header">
        <ul className="header-links">
            <li><a >Home</a></li>
            <li><a >Projects</a></li>
            <li><a >About</a></li>
            <li><a >Contact</a></li>
            <li><a >Resume</a></li>
        </ul>
        <ul className="socials">
            <li className="social">Github</li>
            <li className="social">LinkedIn</li>
            <li className="social">Twitter</li>
        </ul>
        </div>
    )
}