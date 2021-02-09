import './App.css';
// import { Route, Switch } from "react-router-dom"
// import Home from "./screens/Home"
// import About from "./screens/About"
// import Projects from "./screens/Projects"
// import ProjectDetail from "./screens/ProjectDetail"
// import Contact from "./screens/Contact"
// import React, { useRef } from "react";
import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'

export default class App extends Component {
  render () {
    return (
      <Fullpage>

        <FullPageSections>

          <FullpageSection
            style={{
            backgroundColor: 'black',
            height: '100vh',
            padding: '1em',
            }}>
            <div></div>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'coral',
            padding: '1em',
          }}>2</FullpageSection>
          <FullpageSection style={{
            backgroundColor: 'firebrick',
            padding: '1em',
          }}>3</FullpageSection>

        </FullPageSections>

      </Fullpage>
    )
  }
}


// function App() {
  
//   return ( 
    // <Switch>
    //   <Route exact path='/'>
    //     <Home />
    //   </Route>
    //   <Route path='/about-me'>
    //     <About/>
    //   </Route>
    //   <Route path='/projects'>
    //     <Projects/>
    //   </Route>
    //   <Route path='/project-detail'>
    //     <ProjectDetail/>
    //   </Route>
    //   <Route path='/contact-me'>
    //     <Contact/>
    //   </Route>
    // </Switch>
    
//   );
// }

// export default App;
