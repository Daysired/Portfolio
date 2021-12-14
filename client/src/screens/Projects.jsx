import React from "react";
import "../styles/Projects.css";
import Everywhen from "../Assets/Everywhen.png";
import Insequence from "../Assets/Insequence.png";
import HeroesVsVillains from "../Assets/HeroesVsVillains.png";

export default function Projects() {
  return (
    <div>
      <h1 className="projects-title">Projects</h1>
      <div className="project-left">
        <div className="project-img-e">
          <img className="everywhen-img" src={Everywhen}></img>
        </div>
        <div className="project-text-e">
          <h3 className="project-name">Everywhen</h3>
          <span>
            Built with react, css, and using Airtable API, Everywhen is an
            application that serves as a self tracker and assesment for mental
            health.
          </span>
          <span className="project-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://everywhen.netlify.app/"
              class="btn3-icon1"
            >
              <i class="fas fa-eye"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/Everywhen"
              class="btn3-icon2"
            >
              <i class="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>

      <div className="project-right">
        <div className="project-img-i">
          <img className="insequence-img" src={Insequence}></img>
        </div>
        <div className="project-text-i">
          <h3 className="project-name">Insequence</h3>
          <span>
            A full stack app with user authentication that works as a developer
            tool for tracking and organization. It allows users to keep track of
            their studies, projects, networking events, and job search. Built
            with React, Ruby, Rails, and css.
          </span>
          <span className="project-links-in">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://in-sequence.netlify.app/"
              class="btn-icon1"
            >
              <i class="fas fa-eye"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/In-Sequence"
              class="btn-icon2"
            >
              <i class="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>

      <div className="project-hv">
        <div className="project-img-hv">
          <img className="heroes-img" src={HeroesVsVillains}></img>
        </div>
        <div className="project-text-hv">
          <h3 className="project-name">Heroes VS Villains</h3>
          <span>
            An application that allows users to search their favorite
            superheroes and villains and returns information on their
            powerstats, biography, appearance, work, connections, and their
            picture. Built with HTML, JavaScript, and CSS.
          </span>
          <span className="project-links">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://daysired.github.io/Heroes-Vs-Villains/index.html"
              class="btn-icon1"
            >
              <i class="fas fa-eye"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/Heroes-Vs-Villains"
              class="btn-icon2"
            >
              <i class="fab fa-github"></i>
            </a>
          </span>
        </div>
      </div>

     
    </div>
  );
}
