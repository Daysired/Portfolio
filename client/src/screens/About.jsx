import "../styles/About.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
  <div className="about-screen-container">
    <div className="about-container">
      <div className="about-img-div">
        <img className="about-img" src="https://i.imgur.com/FIbZCZS.png" />
      </div>
        <div className="about-text-container">
          <h4 className="aboutscreen-title">About Me</h4>
        <h5 className="about-text">
            Hi there, I’m Daysired (aka Daisy). 
            Im an NYC tailor and academic advisor turned software engineer
              bringing my passion and creativity into the tech industry.
            From my passion for fashion to my ode to code, I’m always looking for
             a new challenge and opportunity to showcase my skills. That is why I created
             Ode To Code, to brand and market my work and skills.
        </h5>
          <h5 className="about-text"> Currently I'm working fulltime as a java developer at Ford Motor Company, but I'm ready to switch to a more challenging role. Open to full-time, part-time and freelance work
          opportunities alike, I bring passion and a strong work ethic to every position.
          As someone who’s always worked in a fast paced environment, quick thinking
          and creative problem solving have always been my best attributes and I’m excited
          to bring these qualities and more to my next role.</h5>
      
        <div className="resume-btn-div">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Ze6gCZCoMfMyRZE7Zh-U3QiQ-osFK7Sf/view?usp=sharing">
          <button>Resume <FontAwesomeIcon className="resume" icon={faDownload} /></button>
          </a>
        </div>
        
       
       
      </div>
      </div>
      </div>
  );
}
