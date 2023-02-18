import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

export default function Navbar(){
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <div className='container'>
            <h1>Crypto<span className='primary'>Fan</span></h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Cryptocurrencies</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-group'>
                <button className='btn'>Log In</button>
            </div>
            <div className='hamburger' onClick={handleClick}>
                {/*FaTimes icon if click is true and the FaBars icon if click is false.  */}
                {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : <FaBars size={20} style={{color: '#333'}}/>}
            </div>
        </div>      
    </div>
  )
}
