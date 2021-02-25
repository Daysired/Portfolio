import React from "react";
import "../styles/Everywhen.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


export default function Everywhen() {
  return (
    <div className="everywhen-container">
      <div className="everywhen-img">
        <img className="everywhen-detail-img" src="https://i.imgur.com/9AHSkxl.png"/>
      </div>
      <div className="everywhen-text-container">
        <h4 className="everywhen-title">Everywhen</h4>
        <h5 className="everywhen-details">
          Built with react, css, and using Airtable API, 
          Everywhen is an application that serves as a self tracker and assesment for mental health.
        </h5>
        <div className="everywhen-btn-container">
          <div className="everywhen-site">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://everywhen.netlify.app/">
              <FontAwesomeIcon className="er-site" icon={faGlobe} />
            </a>
          </div>
          <div className="e-github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Daysired/Everywhen">
               <i class="devicon-github-original"></i>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}