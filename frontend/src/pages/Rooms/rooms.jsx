import React from 'react'
import './rooms.styles.css'
import searchicon from '../../images/search-icon.png'
import addroom from '../../images/add-room-icon.png'
const Rooms = () => {
  return (
    <>
    <div className="container">
      <div className="roomsHeader">
        <div className="left">
          <span className='heading'> All voice Rooms</span>
          <div className="searchbox">
            <img src={searchicon} alt="search" />
            <input type="text" className='searchinput' />
          </div>
        </div>
        <div className="right">
          <button className='Newroombtn'>
            <img src={addroom} alt="addroom" />
            <span>Start a Room</span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rooms;