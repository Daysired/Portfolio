import React from "react";
import "../styles/Habanero.css";


export default function Habanero() {
  return (
    <div className="habanero-container">
      <div className="habanero-img">
        <img className="habanero-detail-img" src="https://i.imgur.com/af3pNkH.png"/>
      </div>
      <div className="habanero-text-container">
        <h4 className="habanero-title">Habanero's Marketplace</h4>
        <h5 className="habanero-details">
          A full stack online marketplace app for hot sauce enthusiasts.
          With user authentication, the app allows users to create an account in order to create, read, edit, and delete items on the marketplace. 
          This app was built with MongoDB, Express, React, css and used git version control for collaboration with other development team members, as this was a team project.
        </h5>
        <div className="habanero-btn-container">
          <div className="habanero-site">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://habaneros-marketplace.netlify.app/">
              <button>Live Site</button>
            </a>
          </div>
          <div className="habanero-github">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/zac-olds/habaneros-marketplace">
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}