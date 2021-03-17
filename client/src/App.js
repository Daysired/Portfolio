import "./App.css";
import { useState } from "react";
import Home from "./screens/Home"
import About from "./screens/About"
// import Heroes from "./screens/Heroes"
// import Everywhen from "./screens/Everywhen"
// import Habanero from "./screens/Habanero"
import Projects from "./screens/Projects"
// import InSequence from "./screens/InSequence"
import Contact from "./screens/Contact"
import Nav from "./components/Nav"
import { Route} from "react-router-dom";
import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faBars
} from "@fortawesome/free-solid-svg-icons";

 
function App() {
  
  // const scrollTo = (ref) => {
  //   window.scroll({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };



  return (
  
    <div>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

    </div>


  );
}

export default App;
