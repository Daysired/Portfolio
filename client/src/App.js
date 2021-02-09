import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home"
import About from "./screens/About"
import Projects from "./screens/Projects"
import ProjectDetail from "./screens/ProjectDetail"
import Contact from "./screens/Contact"

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
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
    </Switch>
  );
}

export default App;
