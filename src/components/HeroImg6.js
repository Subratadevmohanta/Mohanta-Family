import "./HeroImgAll.css"

import React from 'react'
import PIC7 from '../assets/pic-7.jpg'

const HeroImg6 = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={PIC7} alt="PIC2"/>
        </div>
        
        <div className="content">
            <p>Learn More  </p>
            <h1>About.</h1>
        </div>
    </div>
  )
}

export default HeroImg6