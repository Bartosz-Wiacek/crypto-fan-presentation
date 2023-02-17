import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='header'>
        <div className='container'>
            <h1>Crypto<span className='primary'>Fan</span></h1>
            <ul className='nav-menu'>
                <li>
                    <a href='/'>Home</a>
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
                <button className='btn'>Connected Wallet</button>
            </div>
            <div className='hamburger'>
                <FaBars size={20} style={{color: '#333'}}/>
            </div>
            {/* VIDEO 23:15 */}
        </div>      
    </div>
  )
}
