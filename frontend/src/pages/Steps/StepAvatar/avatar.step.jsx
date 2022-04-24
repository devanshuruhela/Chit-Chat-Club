import React, { useState } from 'react'
import Card from '../../../Components/Shared/Card/card.component'
import Button from '../../../Components/Shared/Button/button.component'
import avatarimage from '../../../images/monkey-avatar.png'
import emoji from '../../../images/monkey-emoji.png'
import { useDispatch, useSelector } from 'react-redux'
import setAvatar from '../../../store/activateSlice'
import setAuth from '../../../store/authSlice'
import { activate } from '../../../Http/endpoints'
import './avatar.styles.css'
const StepAvatar = ({onNext}) => {
  const dispatch = useDispatch()
  const {name , avatar} = useSelector(state => state.activate)
  const [image , setImage] = useState(avatarimage)
  async function submit()
  {
    try {
      const {data} = await activate({name , avatar})
      if (data.auth) {
                dispatch(setAuth(data));
            }
    } catch (error) {
      console.log(error)
    }
  }

  function changeimage(e)
  {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function()
    {
      setImage(reader.result);
      dispatch(setAvatar(reader.result))
    }
    console.log(e)
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