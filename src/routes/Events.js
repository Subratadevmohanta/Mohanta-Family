import React, { useState, useEffect } from "react";
import '../index.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg1 from '../components/HeroImg1'
import Clock from "../components/Clock";

const Events = () => {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

const startTimer=()=>{
  const countDownDate = new Date("Sep 19,2023").getTime();

  interval = setInterval(()=>{
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (24 * 60 * 60 * 1000));

    const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));

    const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60));

    const seconds  = Math.floor(distance % (60 * 1000) / (1000));

    if (distance < 0){
      // stop timer
      clearInterval(interval.current);
    } else {
      // Update Timer
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  });
};

 useEffect(() => {
  startTimer();
 });

  return (
    <div>
      <Navbar />
      <HeroImg1 />
      <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
      <Footer />
    </div>
  )
};

export default Events