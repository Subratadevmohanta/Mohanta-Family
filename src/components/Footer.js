import "./Footer.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Nondonpur, Shyampur, Bodorgonj,</p>
                        <p>Rangpur, Bangladesh</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>+8801796001589</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>shuvomohanta1234@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About the Family</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sint illum corrupti nemo perspiciatis illo et iure architecto error libero.</p>

                <div className="social">
                <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer