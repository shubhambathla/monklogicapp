import React from 'react'
import './HeroImageAndText.css';
import HeroImage from '../Asset/hero-image.png';

function HeroImageAndText() {
  return (
    <div className='hero-Image-and-Text-container'>
        <div className='hero-Image-and-Text'>
        <div className='hero-Text'>
            <h1>You Imagine, We Create.</h1>
            <p>Elevating Brands with Custom Web Solutions. Transforming Visions into Engaging Online Realities.</p>
        </div>
        <div className='hero-Image'>
            <img src={HeroImage} width='110%'></img>
        </div>
        </div>
    </div>
    
  )
}

export default HeroImageAndText