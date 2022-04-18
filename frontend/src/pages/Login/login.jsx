import React, { useState } from 'react'
import './login.styles.css'
import StepPhoneEmail from '../Steps/StepPhoneEmail/phoneEmail.step';
import StepOtp from '../Steps/StepOtp/otp.step';
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Login = () => {
   const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext()
  {
    setStep(step+1)
  }
  return (
    <Step onNext = {onNext} />
  )
}

export default Login