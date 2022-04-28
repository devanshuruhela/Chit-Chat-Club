import React from 'react'
import './card.styles.css'
const Card = ({heading , logo , children}) => {
  return (
    <div className="card">
      <div className="heading-container">
        {logo && <img src={logo} alt="emoji" />}
        {heading && <h1 className="heading">{heading}</h1>}
      </div>
      {children}
    </div>
  )
}

export default Card