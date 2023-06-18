import "./HeroImgAll.css"

import React from 'react'
import PIC5 from '../assets/pic-5.jpg'

const HeroImg4 = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={PIC5} alt="PIC2"/>
        </div>
        
        <div className="content">
            <p>Here A E-Comers </p>
            <h1>OnlineShop</h1>
        </div>
    </div>
  )
}

export default HeroImg4