import React, { useState } from 'react'
import Card from '../../../Components/Shared/Card/card.component';
import TextInput from '../../../Components/Shared/Textinput/textinput.component';
import lock from '../../../images/lock-emoji.png'
import Button from '../../../Components/Shared/Button/button.component';
import { verifyOtp } from '../../../Http/endpoints';
import './otp.styles.css'
import { useDispatch, useSelector } from 'react-redux';
import {setAuth} from '../../../store/authSlice';
const StepOtp = () => {
  const[otp , setOtp] = useState('');

  const {phone , hash} = useSelector((state)=> state.auth.otp);
  const dispatch  = useDispatch();
  async function submit()
  {
    if(!otp || !phone || !hash)
    {
      return
    }
    try {
      const {data} = await verifyOtp({otp ,phone, hash})
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <>
    <div className='cardContainer'>
      <Card logo={lock} heading='Enter the code we just sent you'>
      <TextInput type='text' value={otp} onChange = {(e)=>setOtp(e.target.value)} />
      <div className="actionbtn">
        <Button btntext='Next' onClick={submit}>Next</Button>
      </div>
      <p className='bottompara'>
        By entering your Number, you're agreeing to our Terms of service and Privacy Policy. Thanks!
      </p>
      </Card>
    </div>
    </>
  );
}

export default StepOtp