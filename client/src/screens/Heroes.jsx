import React from "react";

import "./Heroes.css";


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
              <button className="h-site-btn">Live Site</button>
            </a>
          </div>
          <div className="h-github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired">
              <button className="h-gihub-btn">Github</button>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}
