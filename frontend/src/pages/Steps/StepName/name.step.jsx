import React, { useState } from 'react'
import Card from '../../../Components/Shared/Card/card.component'
import Button from '../../../Components/Shared/Button/button.component'
import TextInput from '../../../Components/Shared/Textinput/textinput.component'
import emoji from '../../../images/goggle-emoji.png'
import { useDispatch , useSelector } from 'react-redux'
import { setName } from '../../../store/activateSlice'
import './name.styles.css'
const StepName = ({onNext}) => {
  const {name} = useSelector((state)=> state.activate)
  const [fullname, setFullName] = useState(name);
  const dispatch = useDispatch();
  function nextStep()
  {
    if(!fullname)
    {
      return;
    }
    dispatch(setName(fullname))
    onNext();
  }
  return (
    <div className='cardContainer'>
    <Card logo={emoji} heading="What's your full name?">
      <TextInput type='text' value={fullname} onChange={(e)=>setFullName(e.target.value)} />
      <p className='para'>
        People use real name at chit chat club!
      </p>
      <div className="actionbtn">
        <Button btntext='Next' onClick={nextStep}>Next</Button>
      </div>
      
      </Card>
    </div>
  )
}

export default StepName