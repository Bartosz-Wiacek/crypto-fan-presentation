import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import PrimaryButton from './buttons/PrimaryButton'
import './Navbar.css'

export default function Navbar(){
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

const [width, setWidth] = useState(window.innerWidth)

React.useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => setWidth(window.innerWidth));
}, []);



  return (
        <div className='nav-container'>
            <h3 className='logo'>Crypto<span className='primary'>Fan</span></h3>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/coins'>Cryptocurrencies</a>
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
                {width < 940 && 
                <div className='nav-mobile-login'>
                   <PrimaryButton size={'big'} onClick={() => {}}>
                        Log in
                    </PrimaryButton>
                </div>}
            </ul>
            {width > 940 &&<PrimaryButton size={'small'} onClick={() => {}}>
                Log in
            </PrimaryButton>}
            <div className='hamburger' onClick={handleClick}>
                {/*FaTimes icon if click is true and the FaBars icon if click is false.  */}
                {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : <FaBars size={20} style={{color: '#333'}}/>}
            </div>
        </div>      
  )
}
