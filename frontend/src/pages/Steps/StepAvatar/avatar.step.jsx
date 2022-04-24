import React, { useState } from 'react'
import Card from '../../../Components/Shared/Card/card.component'
import Button from '../../../Components/Shared/Button/button.component'
import TextInput from '../../../Components/Shared/Textinput/textinput.component'
import avatarimage from '../../../images/monkey-avatar.png'
import emoji from '../../../images/monkey-emoji.png'
import { useSelector } from 'react-redux'
import './avatar.styles.css'
const StepAvatar = ({onNext}) => {
  const {name} = useSelector(state => state.activate)
  const [image , setImage] = useState(avatarimage)
  function submit()
  {

  }

  function changeimage(event)
  {
    const file = event.target.files[0];
    
    console.log(event)
  }
  return (
    <div className='cardContainer'>
    <Card logo={emoji} heading={`Okay, ${name}`}>
      <p className='subheading'>How's this photo?</p>
      <div className='avatarContainer'>
        <img  className='avatars' src={image} alt="avatar" />
      </div>
      <div>
        <input onChange={changeimage} type="file"  id="avatarInput" className='avatarInput' hidden/>
        <label htmlFor="avatarInput">Choose a different photo</label>
      </div>
      <div className="actionbtn">
        <Button btntext='Next' onClick={submit}>Next</Button>
      </div>
      
      </Card>
    </div>
  )
}

export default StepAvatar