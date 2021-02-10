import "./About.css";
import { Link } from "react-router-dom";

import React from "react";

export default function About() {
  return (
    <div className="image-stack">
      <div className="about-circle-top">
        <img className="about-img" src="https://i.imgur.com/25rtdfN.png" />
      </div>
      <div className="about-container-bottom">
        <p className="about-text">
          Hi there I’m Daysired (I also go by “Daisy”). 
          Im an NYC tailor turned software engineer looking to bring my passion and creativity into the tech industry. 
          As someone who’s always worked in a fast paced environment, quick thinking and creative problem solving have always been my best attributes and I’m excited to bring these qualities and more to my next role.
        </p>
        <a href="https://drive.google.com/file/d/1SEE3ymCmKl3W460fN5uIRvthLakEg6X9/view?usp=sharing">
          <button>Resume</button>
        </a>
        <h4>Languages and Frameworks</h4>
        <div className="section-line"></div>
        <div className="languages-container">
          <div className="language-div">
            <i className="language-icon devicon-html5-plain colored" />
            HTML
          </div>

          <div className="language-div">
            <i className="language-icon devicon-javascript-plain colored" />
            JavaScript
          </div>

          <div className="language-div">
            <i className="language-icon devicon-css3-plain colored" />
            CSS
          </div>

          <div className="language-div">
            <i className="language-icon devicon-react-original colored" />
            React
          </div>

          <div className="language-div">
            <i className="language-icon devicon-ruby-plain colored" />
            Ruby
          </div>

          <div className="language-div">
            <i className="language-icon devicon-rails-plain colored" />
            Rails
          </div>

          <div className="language-div">
            <i className="language-icon devicon-postgresql-plain colored" />
            PostgreSQL
          </div>

          <div className="language-div">
            <i className="language-icon devicon-express-original colored" />
            Express
          </div>

          <div className="language-div">
            <i className="language-icon devicon-mongodb-plain colored" />
            MongoDB
          </div>
        </div>
      </div>
    </div>
  );
}
