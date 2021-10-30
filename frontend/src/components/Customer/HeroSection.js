import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>Making Health</h1>
      <h1>Care Better Together</h1>
      <p>The website of Medcare for storing Ultrasound image</p>
      <div>
          <form action="/patient_login">
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Enter your email for viewing ultrasound images'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
    </div>
  );
}

export default HeroSection;
