import React, { useState } from 'react'
import './phoneEmail.styles.css'
import Phone from './Phone/phone';
import Email from './Email/email';
const PhoneEmailMap =
{
  phone:Phone,
  email:Email
}
const StepPhoneEmail = ({onNext}) => {
   const [type, setType] = useState('phone');
  const Type = PhoneEmailMap[type];

  // function onNext()
  // {
    
  // }
  return (
    <>
    <div className="cardContainer">
      <div>
        <div className="buttonContainer">
        <button onClick={()=>setType('phone')}>Phone</button>
        <button onClick={()=>setType('email')}>Email</button>
      </div>
      <Type onNext={onNext} />
      </div>
    </div>
  </>
  );
}

export default StepPhoneEmail