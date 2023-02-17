import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/* Left side */}
            <div className='left'>
                <p>Buy & Sell crypto 24/7 using your account</p>
                <h1>Invest in Cryptocurrency with us</h1>
                <p>Buy, Sell, and store cryptos</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your mail' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            {/* Right side */}
            <div className='right'>
                <div className='img-container'>
                    <img src={Crypto} alt=''/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
