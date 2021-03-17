import "../styles/About.css";
import React from "react"; 
import Layout from "../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function About() {
  return (
    <Layout>
    <div className="image-stack">
      <div className="about-circle-top">
        <img className="about-img" src="https://i.imgur.com/25rtdfN.png" />
      </div>
      <div className="about-container-bottom">
        <h5 className="about-text">
          Hi there, I’m Daysired (aka Daisy). 
          Im an NYC tailor and academic advisor turned software engineer looking to bring my passion and creativity into the tech industry. 
          From my passion for fashion to my ode to code, I’m always looking for a new challenge and opportunity to showcase my skills. 
          As someone who’s always worked in a fast paced environment, quick thinking and creative problem solving have always been my best attributes and I’m excited to bring these qualities and more to my next role.
        </h5>
        <div className="btn-stack">
        <div className="resume-div">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1Ze6gCZCoMfMyRZE7Zh-U3QiQ-osFK7Sf/view?usp=sharing">
          <button>Resume <FontAwesomeIcon className="resume" icon={faDownload} /></button>
          </a>
        </div>
        <div className="my-git">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Daysired">
          <FontAwesomeIcon className="p-github" icon={faGithub} />
          </a>
        </div>

        <div className="my-linkedin">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/daysired-de-jesus/">
          <FontAwesomeIcon className="p-linked" icon={faLinkedinIn} />
        </a>
        </div>
       </div>

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
    </Layout>
  );
}
