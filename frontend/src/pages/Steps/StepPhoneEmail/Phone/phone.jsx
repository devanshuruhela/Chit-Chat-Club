import React from 'react'
import Card from '../../../../Components/Shared/Card/card.component'
import Button from '../../../../Components/Shared/Button/button.component'
import logo from '../../../../images/phone.png'
const Phone = () => {
  return (
    <Card logo={logo} heading='Enter your Phone Number'>
          <div>
            <Button btntext="Next"></Button>
          </div>
      </Card>
  )
}

export default Phone