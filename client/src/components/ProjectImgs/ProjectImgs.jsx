import React from "react";
import { Link } from "react-router-dom";
import "./ProjectImgs.css";

export default function ProjectImgs() {
  return (
    <div>
      <h1 className="pj-title">Projects</h1>
      <div className="pjs">
        <div className="pj-line"></div>
        {/* <div className="card1">
          <img className="pj-hv" src="https://i.imgur.com/qW3jBXa.png" />
          <h3 className="title">Heroes Vs Villains</h3>
        </div> */}

        <div className="pj-item1">
          <img className="pj-inseq" src="https://i.imgur.com/5gtFoMV.png" />

          <div  className="project-title1">
            <h3 className="title">In Sequence</h3>
          </div>
          
          <div class="projects__btns1">
            <h4 className="inseq-title">Insequence</h4>
            <p className="pj1-p">
              A full stack app with user authentication that
              works as a developer tool for tracking and organization.
              It allows users to keep track of their studies, projects,
               networking events, and job search. Built with React, Ruby, Rails, and css.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://in-sequence.netlify.app/" class="btn-icon1">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/In-Sequence" class="btn-icon2">
              <i class="fab fa-github"></i> Github
            </a>
          </div>
        </div>

        <div className="pj-item2">
          <img className="pj-haba" src="https://i.imgur.com/WOxqBWh.png" />

          <div className="project-title2">
            <h3 className="title1">Habanero's Marketplace</h3>
          </div>

          <div class="projects__btns2">
          <h4 className="haba-title">Habanero's Marketplace</h4>
            <p className="pj2-p">
            A full stack online marketplace app for hot sauce enthusiasts.
            With user authentication, the app allows users to create an account
            in order to create, read, edit, and delete items on the marketplace.
            This app was built with MongoDB, Express, React, css and used git version
            control for collaboration with other development team members, as this was a team project.
            </p>
            <a
               target="_blank"
               rel="noreferrer"
               href="https://habaneros-marketplace.netlify.app/"
              class="btn2-icon1">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/zac-olds/habaneros-marketplace"
              class="btn2-icon2">
              <i class="fab fa-github"></i> Github
            </a>
          </div>

        </div>

        <div className="pj-item3">
          <img className="pj-every" src="https://i.imgur.com/9AHSkxl.png" />

          <div className="project-title3">
            <h3 className="title2">Everywhen</h3>
          </div>

          <div class="projects__btns3">
          <h4 className="every-title">Everywhen</h4>
            <p className="pj3-p">
            Built with react, css, and using Airtable API, 
            Everywhen is an application that serves as a self
            tracker and assesment for mental health.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://everywhen.netlify.app/"
              class="btn3-icon1">
              <i class="fas fa-eye"></i> Preview
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/Everywhen"
              class="btn3-icon2">
              <i class="fab fa-github"></i> Github
            </a>
          </div>

        </div>
        
      </div>
      <h5 className="more-pjs">More Projects Coming Soon!</h5>
    </div>
  );
}
