import "../styles/About.css";
import React from "react";
import Layout from "../Layouts/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <Layout>
    <div className="image-stack">
      <div className="about-circle-top">
        <img className="about-img" src="https://i.imgur.com/FIbZCZS.png" />
      </div>
        <div className="about-container-bottom">
          <h4 className="aboutscreen-title">About Me</h4>
        <h5 className="about-text">
            Hi there, I’m Daysired (aka Daisy). 
            Im an NYC tailor and academic advisor turned software engineer
             looking to bring my passion and creativity into the tech industry.
            From my passion for fashion to my ode to code, I’m always looking for
             a new challenge and opportunity to showcase my skills. I recently created
             Ode To Code to brand and market my work and skills.
        </h5>
          <h5 className="about-text"> Open to full-time, part-time and freelance work
          opportunities alike, I bring passion and a strong work ethic to every position.
          As someone who’s always worked in a fast paced environment, quick thinking
          and creative problem solving have always been my best attributes and I’m excited
          to bring these qualities and more to my next role.</h5>
        <div className="btn-stack">
        <div className="resume-div">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Ze6gCZCoMfMyRZE7Zh-U3QiQ-osFK7Sf/view?usp=sharing">
          <button>Resume <FontAwesomeIcon className="resume" icon={faDownload} /></button>
          </a>
        </div>
        
       </div>

        <h4 className="languages-title">Languages and Frameworks</h4>
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
    </Layout>
  );
}
