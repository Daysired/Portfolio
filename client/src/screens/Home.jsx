import "./Home.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <div className="top-text">
          <h2 className="name">DAYSIRED DE JESUS</h2>
          <h3 className="title">SOFTWARE ENGINEER</h3>
        </div>
        <div className="bottom-image">
          <img className="home-img" src="https://i.imgur.com/d2PJ7UG.png" />
        </div>
      </div>
      <div className="indicator">
        <span></span>
        <span></span>
        {/* <span></span> */}
      </div>
    </div>
  );
}
