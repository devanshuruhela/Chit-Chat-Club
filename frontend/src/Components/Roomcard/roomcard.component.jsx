import React from 'react'
import './roomcard.styles.css'
import chatbubble from '../../images/chat-bubble.png'
import peopleicon from '../../images/user-icon.png'
import { useNavigate } from 'react-router-dom'
const RoomCard = ({room }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/room/${room.id}`)} className='cardcontainer'>
      <h3 className='topic'>{room.topic}</h3>
      <div className={`speakers ${room.speakers.length === 1?'singlespeaker':''}`}>
        <div className="avatarimg">
        {room.speakers.map((speaker) =>(
          <img key={speaker.id} src={speaker.avatar} alt="speaker-avatar" />
        ))}</div>
        <div className="names">
          {room.speakers.map((speaker) =>(
          <div key={speaker.id}  className="namecontainer">
            <span>{ speaker.name}</span>
            <img src={chatbubble} alt="chat-bubble" />
          </div>
        ))}
        </div>
      </div>
      <div className="peoplecount">
        <span>{room.totalPeople}</span>
        <img src={peopleicon} alt="users" />
      </div>
    </div>
  )
}

export default RoomCard;