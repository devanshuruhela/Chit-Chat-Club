import React, { useState } from 'react'
import Card from '../../../Components/Shared/Card/card.component';
import TextInput from '../../../Components/Shared/Textinput/textinput.component';
import lock from '../../../images/lock-emoji.png'
import Button from '../../../Components/Shared/Button/button.component';
import './otp.styles.css'
const StepOtp = ({onNext}) => {
  const[Otp , setOtp] = useState('');
  return (
    <>
    <div className='cardContainer'>
      <Card logo={lock} heading='Enter the code we just sent you'>
      <TextInput type='text' value={Otp} onChange = {(e)=>setOtp(e.value.value)} />
      <div className="actionbtn">
        <Button btntext='Next' onClick={onNext}>Next</Button>
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