import "./App.css";
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home"
import About from "./screens/About"
// import Projects from "./screens/Projects"
// import ProjectDetail from "./screens/ProjectDetail"
// import Contact from "./screens/Contact"
import React, { useRef } from "react";
import { Link } from 'react-router-dom';


function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };


  return (
  
    <div>
    <nav style={{ position: "fixed", top: "16px", left: "16px" }}>
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
        Section 3
    </div>
    <div ref={contactRef} style={{ height: "100vh", margin: 0 }}>
      Section 4
    </div>
  </div>
  
  
/* <Switch>
  <Route exact path='/'>
    <Home />
  </Route>
  <Route path='/about-me'>
    <About/>
  </Route>
  <Route path='/projects'>
    <Projects/>
  </Route>
  <Route path='/project-detail'>
    <ProjectDetail/>
  </Route>
  <Route path='/contact-me'>
    <Contact/>
  </Route>
</Switch> */

  );
}

export default App;
