import React, { useState } from 'react'
import Card from '../../../../Components/Shared/Card/card.component'
import Button from '../../../../Components/Shared/Button/button.component'
import logo from '../../../../images/phone.png'
import TextInput from '../../../../Components/Shared/Textinput/textinput.component'
const Phone = ({onNext}) => {
  const [phoneNum , setPhoneNum] = useState('');

  return (
    <Card logo={logo} heading='Enter your Phone Number'>
          <TextInput type='tel' value ={phoneNum} onChange={(e)=> setPhoneNum(e.target.value)}/>
          <div>
            <div className='actionbtn'>
            <Button btntext="Next" onClick={onNext}></Button>
            </div>
          <p className='btnpara'>
            By entering your number, you're agreeing to our Terms of service and Privacy Policy. Thanks!
          </p>
        </div>
      </Card>
  )
}

export default Phone