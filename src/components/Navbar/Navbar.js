import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="#">
          RG
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#projects">
                Projects <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
          <span class="navbar-text socials">
            <ul class="navbar-nav mr-auto socials">
              <li class="nav-item ">
                <a class="nav-link" href="https://github.com/rileygramlich" target="_blank">
                  Github
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/rileygramlich/" target="_blank">
                  LinkedIn
                  <i class="fa-regular fa-house"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://twitter.com/rileygramlich" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </>
  );
}
