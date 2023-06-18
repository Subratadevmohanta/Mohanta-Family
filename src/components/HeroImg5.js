import "./HeroImgAll.css"
import PIC6 from '../assets/pic-6.jpg'

const HeroImg5 = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={PIC6} alt="PIC2"/>
        </div>
        
        <div className="content">
            <p>Do you Wont to </p>
            <h1>Contact Us.</h1>
        </div>
    </div>
  )
}

export default HeroImg5