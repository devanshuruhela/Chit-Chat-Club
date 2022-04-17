import React, { useState } from "react";
import "./register.styles.css";
import StepUserName from "../Steps/StepUserName/username.step";
import StepPhoneEmail from "../Steps/StepPhoneEmail/phoneEmail.step";
import StepOtp from "../Steps/StepOtp/otp.step";
import StepName from "../Steps/StepName/name.step";
import StepAvatar from "../Steps/StepAvatar/avatar.step";
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  return (
    <div>
      <Step />
    </div>
  );
};

export default Register;
