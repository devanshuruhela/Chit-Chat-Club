import React from 'react'
import './roomModel.styles.css'
import TextInput from '../Shared/Textinput/textinput.component'
const RoomsModal = () => {
  return (
    <div className='modalMask'>
      <div className="modalBody">
        <div className="modalContent">
          <h3>Enter the topic to be disscussed</h3>
          <TextInput fullwidth='true'/>
        </div>
        <div className="modalFooter"></div>
      </div>
    </div>
  )
}

export default RoomsModal