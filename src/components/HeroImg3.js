import "./HeroImgAll.css"

import React from 'react'
import PIC4 from '../assets/pic-4.jpg'

const HeroImg3 = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={PIC4} alt="PIC2"/>
        </div>
        
        <div className="content">
            <p>Here All of Our</p>
            <h1>SubFamily </h1>
        </div>
    </div>
  )
}

export default HeroImg3