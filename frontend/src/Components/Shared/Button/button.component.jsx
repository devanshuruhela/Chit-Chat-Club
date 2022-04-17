import React from 'react'
import './button.styles.css'
import arrow from '../../../images/arrow-forward.png'
const Button = ({btntext}) => {
  return (
    <button className='buttons'>
          <span>{btntext}</span>
          <img  className='arrow' src={arrow} alt="arraow-forward" />
    </button>
  )
}

export default Button