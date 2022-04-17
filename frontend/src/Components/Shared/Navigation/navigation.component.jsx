import React from 'react'
import './navigation.styles.css'
import { Link } from 'react-router-dom'
import Logo from '../../../images/logo.png'
const Navigation = () => {

  return (
    <nav className=' navbar container'>
      <Link className='linkstyle' to='/'>
        <img src={Logo} alt="logo" className='navbar'/>
        <span className='linkheading'>Chit-Chat Club</span>
      </Link>
    </nav>
  )
}

export default Navigation;