import "./HeroImgAll.css"

import React from 'react'
import PIC3 from '../assets/pic-3.jpg'

const HeroImg2 = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={PIC3} alt="PIC2"/>
        </div>
        
        <div className="content">
            <p>Here All of Our</p>
            <h1> Family Member's</h1>
        </div>
    </div>
  )
}

export default HeroImg2