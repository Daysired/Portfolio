import React from 'react'
import { Link } from 'react-router-dom';
import "./AboutBlurb.css";

export default function AboutBlurb() {
  return (
    <div>
        <div className="img-stack">
      <div className="about-c-top">
        <img className="abt-img" src="" />
      </div>
      <div className="about-c-bottom">
        <h5 className="abt-text">
            Hi there, I’m Daysired (aka Daisy). 
            Im an NYC tailor and academic advisor turned software engineer looking to bring my passion and creativity into the tech industry. 
            From my passion for fashion to my ode to code, I’m always looking for a new challenge and opportunity to showcase my skills. 
            As someone who’s always worked in a fast paced environment, quick thinking and creative problem solving have always been my best attributes and I’m excited to bring these qualities and more to my next role.
        </h5>
          <Link className="read-link" to="/about">Learn More!</Link>
          
          </div>
          </div>
    </div>
  )
}
