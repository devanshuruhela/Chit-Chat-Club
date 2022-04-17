import React from 'react'
import './card.styles.css'
const Card = ({heading , logo , children}) => {
  return (
    <div className="card">
      <div className="heading-container">
        <img src={logo} alt="emoji" />
        <h1 className="heading">{heading}</h1>
      </div>
      {children}
    </div>
  )
}

export default Card