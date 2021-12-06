import "../styles/Home.css";
import React from "react";
import About from "./About";
import ProjectImgs from "../components/ProjectImgs/ProjectImgs";
import Layout from "../Layouts/Layout";
import Contact from "./Contact";
import HomeImg from "../Assets/HomeImg.png";


export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="home-container">
          <div className="main-image">
            <img
              className="home-img"
              src={HomeImg}
            ></img>
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

        {/* <About /> */}
        <ProjectImgs />
        {/* <Contact /> */}
      </div>
    </Layout>

  );
}
