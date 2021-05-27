import Home from "./screens/Home"
import About from "./screens/About"
import Projects from "./screens/Projects"
import Contact from "./screens/Contact"
import { Route } from "react-router-dom";
import React from "react";
import './App.css';

 
function App() {
 

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
