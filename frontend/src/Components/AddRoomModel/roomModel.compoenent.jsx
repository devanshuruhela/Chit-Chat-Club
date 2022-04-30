import React, { useState } from 'react'
import './roomModel.styles.css'
import TextInput from '../Shared/Textinput/textinput.component'
import { createRoom as create } from '../../Http/endpoints'
import open from '../../images/globe.png'
import social from '../../images/social.png'
import locked from '../../images/lock.png'
import start from '../../images/celebration.png'
import closebtn from '../../images/close.png'
const RoomsModal = ({onclose}) => {
  const [roomType , setRoomType] = useState('open');
  const [topic , setTopic] =useState('');

  async function createRoom()
  {
    if(!topic)
    {
      return
    }
    try {
      const {data} = await create({topic , roomType});
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='modalMask'>
      <div className="modalBody">
        <button onClick={onclose} className='closemodal'>
          <img src={closebtn} alt="close button" />
        </button>
        <div className="modalContent">
          <h3 className='modelheading'>Enter the topic to be disscussed</h3>
          <TextInput fullwidth='true' value={topic} onChange={(e)=>setTopic(e.target.value)}/>
        <h2 className='roomtypesheading'>Room types</h2>
        <div className="roomtypes">
          <div onClick={()=>setRoomType('open')} className={`typebox ${roomType==='open'?'active':''}`}>
            <img src={open} alt="open room" />
            <span>Open</span>
          </div>
          <div onClick={()=>setRoomType('social')} className={`typebox ${roomType==='social'?'active':''}`}>
            <img src={social} alt="Social room" />
            <span>Social</span>
          </div>
          <div onClick={()=>setRoomType('private')} className={`typebox ${roomType==='private'?'active':''}`}>
            <img src={locked} alt="Private room" />
            <span>Private</span>
          </div>
        </div>
        </div>
        <div className="modalFooter">
          <h2>Start a room, open to everyone</h2>
          <button className='startbtn' onClick={createRoom}>
            <img src={start} alt="start button"  />Lets go
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomsModal