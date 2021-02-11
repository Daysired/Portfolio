import React from "react";
import "./InSequence.css";


export default function InSequence() {
  return (
    <div className="insequence-container">
      <div className="insequence-img">
        <img className="insequence-detail-img" src="https://i.imgur.com/0yAPhxX.png"/>
      </div>
      <div className="insequence-text-container">
        <h4 className="insequence-title">In Sequence</h4>
        <h5 className="insequence-details">
          A full stack app with user authentication that works as a developer tool for tracking and organization. 
          It allows users to keep track of their studies, projects, networking events, and job search. Built with React, Ruby, Rails, and css.

        </h5>
        <div className="insequence-btn-container">
          <div className="insequence-site">
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://in-sequence.netlify.app/">
              <button>Live Site</button>
            </a>
          </div>
          <div className="insequence-github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/In-Sequence">
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}