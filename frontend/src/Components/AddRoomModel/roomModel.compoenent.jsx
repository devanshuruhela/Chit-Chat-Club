import React from 'react'
import './roomModel.styles.css'
import TextInput from '../Shared/Textinput/textinput.component'
import open from '../../images/globe.png'
import social from '../../images/social.png'
import locked from '../../images/lock.png'
import start from '../../images/celebration.png'
import closebtn from '../../images/close.png'
const RoomsModal = ({onclose}) => {
  return (
    <div className='modalMask'>
      <div className="modalBody">
        <button onClick={onclose} className='closemodal'>
          <img src={closebtn} alt="close button" />
        </button>
        <div className="modalContent">
          <h3 className='modelheading'>Enter the topic to be disscussed</h3>
          <TextInput fullwidth='true'/>
        <h2 className='roomtypesheading'>Room types</h2>
        <div className="roomtypes">
          <div className="typebox">
            <img src={open} alt="open room" />
            <span>Open</span>
          </div>
          <div className="typebox">
            <img src={social} alt="Social room" />
            <span>Social</span>
          </div>
          <div className="typebox">
            <img src={locked} alt="Private room" />
            <span>Private</span>
          </div>
        </div>
        </div>
        <div className="modalFooter">
          <h2>Start a room, open to everyone</h2>
          <button className='startbtn'>
            <img src={start} alt="start button"  />Lets go
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomsModal