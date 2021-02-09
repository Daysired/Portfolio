import './Home.css';
import { Link } from 'react-router-dom';
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      {/* <h2 className="name">Daysired De Jesus</h2>
      <h3 className="title">Software Engineer</h3> */}
      <img className="home-img" src='https://i.imgur.com/d2PJ7UG.png' />
      {/* <Link to="/about-me"> */}
        <div className="indicator">
        <span></span>
        <span></span>
        <span></span>
        </div>
      {/* </Link> */}
    </div>
  )
}
