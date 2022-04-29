import React from 'react'
import './roomcard.styles.css'
import chatbubble from '../../images/chat-bubble.png'
import peopleicon from '../../images/user-icon.png'
const RoomCard = ({room}) => {
  return (
    <div className='cardContainer'>
      <h3 className='topic'>{room.topic}</h3>
      <div className="speakers">
        <div className="avatarimg">
        {room.speakers.map((speaker) =>(
          <img src={speaker.avatar} alt="speaker-avatar" />
        ))}</div>
        <div className="names">
          {room.speakers.map((speaker) =>(
          <div className="namecontainer">
            <span>{ speaker.name}</span>
            <img key={speaker.id} src={chatbubble} alt="chat-bubble" />
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