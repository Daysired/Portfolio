import "../styles/Home.css";
import "../components/Blurb/AboutBlurb";
import React from "react";
import AboutBlurb from "../components/Blurb/AboutBlurb";
import ProjectImgs from "../components/ProjectImgs/ProjectImgs";
import Layout from "../Layouts/Layout";
import Contact from "./Contact";


export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="home-container">
          <div className="top-img">
            <img
              className="title-img"
              src="https://i.imgur.com/5M5ljzf.png"
            ></img>
          </div>
          <div className="bottom-image">
            <img className="home-img" src="https://i.imgur.com/DpTlH5Y.png" />
          </div>
          <div className="home-text">
          <span className="h-text">
            Creatively Building
            <p className="h-t2"> Powerful Digital Solutions</p>
          </span> 
        </div>
          <div className="home-socials">
            <ul>
              <li className="list-links">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/daisy_d.j/">
                  IN
                </a>
              </li>
              <li className="list-links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/daysired-de-jesus/"
                >
                  LK
                </a>
              </li>
              <li className="list-links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Daysired"
                >
                  GIT
                </a>
              </li>
            </ul>
          </div>
      
          <div class="scroll-indicator">
	<div class="dots"></div>
</div>
        </div>

        <AboutBlurb />
        <ProjectImgs />
        {/* <Contact /> */}
      </div>
    </Layout>

  );
}
