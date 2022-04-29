import React, { useState } from 'react'
import './rooms.styles.css'
import searchicon from '../../images/search-icon.png'
import addroom from '../../images/add-room-icon.png'
import monkey from '../../images/monkey-avatar.png'
import RoomCard from '../../Components/Roomcard/roomcard.component'
import RoomsModal from '../../Components/AddRoomModel/roomModel.compoenent'
const rooms = [
    {
        id: 1,
        topic: 'Which framework best for frontend ?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: monkey,
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: monkey,
            },
        ],
        totalPeople: 40,
    },
    {
        id: 3,
        topic: 'What’s new in machine learning?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: monkey,
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: monkey,
            },
        ],
        totalPeople: 40,
    },
    {
        id: 4,
        topic: 'Why people use stack overflow?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: monkey,
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: monkey,
            },
        ],
        totalPeople: 40,
    },
    {
        id: 5,
        topic: 'Artificial inteligence is the future?',
        speakers: [
            {
                id: 1,
                name: 'John Doe',
                avatar: monkey,
            },
            {
                id: 2,
                name: 'Jane Doe',
                avatar: monkey,
            },
        ],
        totalPeople: 40,
    },
];
const Rooms = () => {

  const [showmodal , setmodal]  = useState(false);

  function openmodal()
  {
    setmodal(true);
  }
  return (
    <>
    <div className="container">
      <div className="roomsHeader">
        <div className="left">
          <span className='roomsheading'> All voice Rooms</span>
          <div className="searchbox">
            <img src={searchicon} alt="search" />
            <input type="text" className='searchinput' />
          </div>
        </div>
        <div className="right">
          <button className='Newroombtn' onClick={openmodal}>
            <img src={addroom} alt="addroom" />
            <span>Start a Room</span>
          </button>
        </div>
      </div>
      <div className='roomsContainer'>
        {rooms.map((room)=>(
          <RoomCard key={room.id} room={room}  />          
          
        ))}
      </div>
    </div>
    {showmodal && <RoomsModal/>}
    </>
  )
}

export default Rooms;