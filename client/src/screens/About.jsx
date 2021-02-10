import './About.css';

import React from 'react'

export default function About() {
  return (
    <div className="image-stack">
      <div className="about-circle-top">
        <img className="about-img" src='https://i.imgur.com/25rtdfN.png' />
      </div>
      <div className="about-container-bottom">
        <p className="about-text">From tailoring designer garments minutes before they hit the runway, to educating students about college through social media, Im always up for a creative challenge. Now I'm an ambitious full-stack developer driven by creativity and a love of learning. Curious and adaptable, I make constantly learning new skills a priority to reach my full potential. </p>
        <button>Resume</button>
        <h4>Languages and Frameworks</h4>
        <div className="section-line"></div>
        <div className="languages-container"></div>
      </div>
    </div>
  )
}
