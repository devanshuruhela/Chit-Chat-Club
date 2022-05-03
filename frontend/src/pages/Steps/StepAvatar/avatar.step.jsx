import React, { useEffect, useState } from 'react'
import Card from '../../../Components/Shared/Card/card.component'
import Button from '../../../Components/Shared/Button/button.component'
import avatarimage from '../../../images/monkey-avatar.png'
import emoji from '../../../images/monkey-emoji.png'
import { useDispatch, useSelector } from 'react-redux'
import {setAvatar} from '../../../store/activateSlice'
import {setAuth} from '../../../store/authSlice'
import { activate } from '../../../Http/endpoints'
import './avatar.styles.css'
import Loader from '../../../Components/Shared/Loader/loader'
const StepAvatar = () => {
  const dispatch = useDispatch()
  const {name , avatar} = useSelector((state) => state.activate)
  const [image , setImage] = useState(avatarimage)
  const [loader , setloader] = useState(false);
  // const [mounted , setMounted ] = useState(false);

  function changeimage(e)
  {
    const file = e.target.files[0];
    console.log(e)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function()
    {
      // console.log(reader.result)
      setImage(reader.result);
      dispatch(setAvatar(reader.result))
    }
    
  }
  async function submit()
  {
    if(!image || !name)
    return
    setloader(true)
    try {
      const {data} = await activate({name , avatar})
      if (data.auth) {
                dispatch(setAuth(data));}
          
          
    } catch (error) {
      console.log(error)
      
    }
    finally
    {
      setloader(false)
    }
  }

  if(loader)
  return <Loader message='Activation in Progress...'/>
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