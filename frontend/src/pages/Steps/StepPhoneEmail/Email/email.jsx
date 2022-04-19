import React, { useState } from 'react'
import Card from '../../../../Components/Shared/Card/card.component'
import Button from '../../../../Components/Shared/Button/button.component'
import logo from '../../../../images/email-emoji.png'
import TextInput from '../../../../Components/Shared/Textinput/textinput.component'
const Email = ({onNext}) => {
  const [emailId , setEmailId] = useState('');
  return (
    <Card logo={logo} heading='Enter your email id'>
       <TextInput type='email' value ={emailId} onChange={(e)=> setEmailId(e.target.value)}/>
       <div>
          <div className='actionbtn'>
            <Button btntext="Next" onClick={onNext}></Button>
          </div>
        </div>
        <p className='btnpara'>
            By entering your email, you're agreeing to our Terms of service and Privacy Policy. Thanks!
          </p>
      </Card>
  )
}

export default Email