import React from "react";
import "../styles/Heroes.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
// import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


export default function Heroes() {
  return (
    <div className="heroes-villains-container">
      <div className="heroes-villains-img">
        <img className="heroe-detail-img" src="https://i.imgur.com/qW3jBXa.png"/>
      </div>
      <div className="heroes-villains-text-container">
        <h4 className="hero-title">Heroes vs Villains</h4>
        <h5 className="heroes-villains-details">
          Built with javascript, html, css, axios, and using a third party API, this application is a superheroes and villains search engine. 
          It allows users to search and build a team of their favorite heroes and villains.
        </h5>
        <div className="btn-container">
          <div className="heroe-site">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://daysired.github.io/Heroes-Vs-Villains/index.html">
              <FontAwesomeIcon className="hr-site" icon={faGlobe} />
              {/* <FontAwesomeIcon className="hr-site" icon={faExternalLinkAlt} /> */}
              
            </a>
          </div>
          <div className="h-github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/Heroes-Vs-Villains">
              <i class="devicon-github-original"></i>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}
