import "./App.css";
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home"
import About from "./screens/About"
// import Projects from "./screens/Projects"
// import ProjectDetail from "./screens/ProjectDetail"
// import Contact from "./screens/Contact"
import React, { useRef } from "react";
import Nav from "./components/Nav"


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
      <button onClick={() => scrollTo(homeRef)}>Section 1</button>
      <br />
      <button onClick={() => scrollTo(aboutRef)}>Section 2</button>
      <br />
      <button onClick={() => scrollTo(projectsRef)}>Section 3</button>
      <br/>
      <button onClick={() => scrollTo(contactRef)}>Section 4</button>
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
