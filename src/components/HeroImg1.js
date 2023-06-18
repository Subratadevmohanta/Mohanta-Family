import "./HeroImgAll.css"

import React from 'react'
import PIC2 from '../assets/pic-2.jpg'

const HeroImg1 = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={PIC2} alt="PIC2"/>
        </div>
        
        <div className="content">
            <h1>Our Family Event's</h1>
            <p>Some of our most recent Event's</p>
        </div>
    </div>
  )
}

export default HeroImg1