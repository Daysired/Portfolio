

import './Nav.css';
import React from 'react'

export default function Nav(props) {
  return (
    
       <nav class="flex desk">
       <div class="link-wrap">
         <a href="#home" class="nav-link">Home</a>
         <a href="#about" class="nav-link">About</a>
         <a href="#Projects" class="nav-link">Projects</a>
         <a href="#contact" class="nav-link">Contact</a>
                {/* <div class="page-link active" dest="home">Home</div>
                <div class="page-link" dest="about">About</div>
                <div class="page-link" dest="projects">Projects</div>
                <div class="page-link" dest="contact">Contact</div> */}
        </div>
      </nav>

  )
}
