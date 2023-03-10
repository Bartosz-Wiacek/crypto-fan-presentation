import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'
import PrimaryButton from './buttons/PrimaryButton'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/* Left side */}
            <div className='left'>
                <p>Sign up Today</p>
                <h1>Crypto Portfolio Tracker</h1>
                <p>Track your crypto earnings like a pro, with a user-friendly and reliable portfolio tracker that you can rely on</p>
                <div className='input-container'>
                    <PrimaryButton size={'big'}>Create your potfolio</PrimaryButton>
                    <PrimaryButton size={'big'}>Learn More</PrimaryButton>
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
