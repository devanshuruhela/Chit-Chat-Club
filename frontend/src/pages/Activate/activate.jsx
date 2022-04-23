import React, { useState } from "react";
import StepName from '../Steps/StepName/name.step'
import StepAavatar from "../Steps/StepAvatar/avatar.step";
const steps = {
  1: StepName,
  2: StepAavatar,
};
const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }
  return (
    <>
      <Step onNext={onNext}></Step>
    </>
  );
};

export default Activate;
