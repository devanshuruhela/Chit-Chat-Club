import React from 'react'
import './textinput.styles.css'
const TextInput = (props) => {
  return (
    <div>
      <input  className='inputs' style={{width:props.fullwidth === 'true'?'100%':'inherit'}} {...props}/>
    </div>
  )
}

export default TextInput