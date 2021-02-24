import "./App.css";
import Home from "./screens/Home"
import About from "./screens/About"
import Heroes from "./screens/Heroes"
import Everywhen from "./screens/Everywhen"
import Habanero from "./screens/Habanero"
import InSequence from "./screens/InSequence"
import Contact from "./screens/Contact"
import Footer from "./components/Footer"
import React, { useRef } from "react";
import { Link } from 'react-router-dom';


function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const heroesRef = useRef(null);
  const everywhenRef = useRef(null);
  const habaneroRef = useRef(null);
  const insequenceRef = useRef(null);

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };


  return (
  
    <div>
    <nav style={{ position: "fixed", top: "0px", left: "0px", right: "0px" }}>
      <Link class="nav-link-home" onClick={() => scrollTo(homeRef)}>Home</Link>
      
      <Link class="nav-link" onClick={() => scrollTo(aboutRef)}>About</Link>
      
      <Link class="nav-link" onClick={() => scrollTo(projectsRef)}>Projects</Link>
      
      <Link class="nav-link" onClick={() => scrollTo(contactRef)}>Contact</Link>
    </nav>
      
    <div ref={homeRef} style={{ height: "100vh", margin: 0 }}>
     <Home/>
    </div>
    <div ref={aboutRef} style={{ height: "100vh", margin: 0 }}>
     <About/>
    </div>
    <div ref={projectsRef} style={{ height: "100vh", margin: 0 }}>
        <div className="projects-container">
          <div className="projects-circle">
            <img className="pr-circle" src="https://i.imgur.com/lPQRp7n.png" />
          </div>
          <div className="projects-imgs">
            <Link class="hero-ref" onClick={() => scrollTo(heroesRef)}><img className="heroes-villains" src="https://i.imgur.com/qW3jBXa.png" /></Link>
            <Link className="everywhen-ref" onClick={() => scrollTo(everywhenRef)}><img className="everywhen" src="https://i.imgur.com/oUsBCPN.png" /></Link>
            <Link className="habanero-ref" onClick={() => scrollTo(habaneroRef)}><img className="habanero" src="https://i.imgur.com/af3pNkH.png" /></Link>
            <Link className="insequence-ref" onClick={() => scrollTo(insequenceRef)}><img className="in-sequence" src="https://i.imgur.com/0yAPhxX.png" /></Link>
          </div>
       </div>
    </div>
    <div ref={heroesRef} style={{ height: "100vh", margin: 0 }}>
        <Heroes/>
    </div>
    <div ref={everywhenRef} style={{ height: "100vh", margin: 0 }}>
        <Everywhen/>
    </div>
    <div ref={habaneroRef} style={{ height: "100vh", margin: 0 }}>
        <Habanero/>
    </div>
    <div ref={insequenceRef} style={{ height: "100vh", margin: 0 }}>
      <InSequence/>
    </div>
    <div ref={contactRef} style={{ height: "100vh", margin: 0 }}>
        <Contact />
        {/* <Footer /> */}
    </div>
  </div>


  );
}

export default App;
