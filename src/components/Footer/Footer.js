import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <h3 className="footer-text">
      &copy; 2023 Designed & Developed by Riley Gramlich
      </h3>
      <ul className="socials">
        <li class="nav-item ">
          <a
            class="nav-link"
            href="https://github.com/rileygramlich"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.linkedin.com/in/rileygramlich/"
            target="_blank"
          >
            <FaLinkedin />
            <i class="fa-regular fa-house"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://twitter.com/rileygramlich"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </footer>
  );
}
