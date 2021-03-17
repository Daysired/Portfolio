import "../styles/Home.css";
import "../components/AboutBlurb";
import React from "react";
import AboutBlurb from "../components/AboutBlurb";
import ProjectImgs from "../components/ProjectImgs";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
    <div className="container">
      <div className="home-container">
        <div className="top-text">
        </div>
        <div className="bottom-image">
          <img className="home-img" src="https://i.imgur.com/gtGGSin.png" />
        </div>
      </div>
    
    
      
        <AboutBlurb />
        <ProjectImgs />
     
      </div>
      </Layout>
  );
}
