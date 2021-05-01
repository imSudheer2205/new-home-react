import React from 'react';
// import '../App.css';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/v-3.mp4' autoPlay loop muted />
      {/* <video src='/images/bg1.jpg' autoPlay loop muted /> */}
      {/* <image src='./images/bg1.jpg' /> */}
      <h1>Atharva</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          // path='/services'
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
