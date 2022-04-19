import React from 'react'
import './textinput.styles.css'
const TextInput = (props) => {
  return (
    <div>
      <input  className='inputs' {...props}/>
    </div>
  )
}

export default TextInput