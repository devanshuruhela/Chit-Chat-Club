import React, { useState } from 'react'
import Card from '../../../../Components/Shared/Card/card.component'
import Button from '../../../../Components/Shared/Button/button.component'
import logo from '../../../../images/phone.png'
import TextInput from '../../../../Components/Shared/Textinput/textinput.component'
import { sendOtp } from '../../../../Http/endpoints'

import { useDispatch } from 'react-redux';
import { setOtp } from '../../../../store/authSlice'
const Phone = ({onNext}) => {
  const [phoneNum , setPhoneNum] = useState('');

  const dispatch = useDispatch();

  async function submit()
  {
    const {data} = await sendOtp({phone:phoneNum});
    console.log(data);
    dispatch(setOtp({phone:data.phone , hash:data.hash}))
    onNext();
  }
  return (
    <Card logo={logo} heading='Enter your Phone Number'>
          <TextInput type='text' value ={phoneNum} onChange={(e)=> setPhoneNum(e.target.value)}/>
          <div>
            <div className='actionbtn'>
            <Button btntext="Next" onClick={submit}></Button>
            </div>
          <p className='btnpara'>
            By entering your number, you're agreeing to our Terms of service and Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
  )
}

export default Phone