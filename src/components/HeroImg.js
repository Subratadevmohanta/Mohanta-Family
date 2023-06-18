import "./HeroImg.css"

import React from 'react'
import PIC1 from '../assets/pic-1.jpg'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={PIC1} alt="PIC1"/>
        </div>
        
        <div className="content">
            <p>Hi, Welcome To Our</p>
            <h1>Mohanta Family</h1>
            <div>
                <Link to="/events" className="btn">Event's</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg