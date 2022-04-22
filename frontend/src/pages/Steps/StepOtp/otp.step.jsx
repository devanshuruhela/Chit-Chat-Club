import React, { useState } from 'react'
import Card from '../../../Components/Shared/Card/card.component';
import TextInput from '../../../Components/Shared/Textinput/textinput.component';
import lock from '../../../images/lock-emoji.png'
import Button from '../../../Components/Shared/Button/button.component';
import { verifyOtp } from '../../../Http/endpoints';
import './otp.styles.css'
import { useSelector } from 'react-redux';
const StepOtp = ({onNext}) => {
  const[otp , setOtp] = useState('');

  const {phone , hash} = useSelector((state)=> state.auth.otp);
  async function submit()
  {
    try {
      const {data} = await verifyOtp({otp ,phone, hash})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    // onNext();
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