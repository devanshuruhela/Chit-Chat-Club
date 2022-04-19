import React, { useState } from 'react'
import './phoneEmail.styles.css'
import Phone from './Phone/phone';
import Email from './Email/email';
import phonelogo from '../../../images/phone-white.png'
import emaillogo from '../../../images/mail-white.png'
const PhoneEmailMap =
{
  phone:Phone,
  email:Email
}
const StepPhoneEmail = ({onNext}) => {
   const [type, setType] = useState('phone');
  const Type = PhoneEmailMap[type];
  return (
    <>
    <div className="cardContainer">
      <div>
        <div className="buttonContainer">
        <button className={`tabBtn ${type === 'phone'? 'active':""}`} onClick={()=>setType('phone')}>
          <img src={phonelogo} alt="phone" />
        </button>
        <button className={`tabBtn ${type === 'email'? 'active':""}`} onClick={()=>setType('email')}>
          <img src={emaillogo} alt="email" />
        </button>
      </div>
      <Type onNext={onNext} />
      </div>
    </div>
  </>
  );
}

export default StepPhoneEmail