import React, { Fragment } from 'react'
import './clock.css'
import IMG26 from "../assets/Img26.jpg"


const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
    <Fragment>
        <section className='next-event'>
            <div className='f1'>
            <img className='event-pic' src={IMG26} alt="IMG26" height={300} width={300}/> 
            </div>
            <div className='f1'>
                <h1>The next event in our family is Sarollo Mohanta's birthday. Which will start after the following time.</h1>
            </div>
        </section>
        <section className="timer-container">
            <section className="timer">
                <div className="clock">
                    <section>
                        <p>{timerDays}</p>
                        <small>Days</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <small>Hours</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <small>Minutes</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <small>Seconds</small>
                    </section>
                </div>
            </section>
        </section>
    </Fragment>
  );
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
  }

export default Clock;