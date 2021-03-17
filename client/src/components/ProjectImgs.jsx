import React from 'react'
import { Link } from 'react-router-dom';
import "./ProjectImgs.css";

export default function ProjectImgs() {
  return (
    <div>
      <h1 className="pj-title">Projects</h1>
      <div className="pj-sectionline"></div>
      <div className="pjs">
        <div className="card">
          <img className="pj-hv" src="https://i.imgur.com/qW3jBXa.png" />
          <h3 className="title">Heroes Vs Villains</h3>
        </div>

        <div className="card">
          <img className="pj-every" src="https://i.imgur.com/9AHSkxl.png" />
          <h3 className="title">Everywhen</h3>
        </div>

        <div className="card">
          <img className="pj-haba" src="https://i.imgur.com/f8Q7Dzn.png" />
          <h3 className="title">Habanero's Marketplace</h3>
        </div>

        <div className="card">
          <img className="pj-inseq" src="https://i.imgur.com/ltpnoRG.png" />
          <h3 className="title">In Sequence</h3>
        </div>
         
          </div>
          </div>
    
  )
}