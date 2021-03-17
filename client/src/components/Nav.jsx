import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
       <nav style={{ position: "fixed", top: "0px", left: "0px", right: "0px" }}>
      <Link class="nav-link-home" to="/">Home</Link>
      
      <Link class="nav-link" to="/about">About</Link>
      
      <Link class="nav-link" to="/projects">Projects</Link>
      
      <Link class="nav-link" to= "contact">Contact</Link>
    </nav>
    </div>
  )
}
