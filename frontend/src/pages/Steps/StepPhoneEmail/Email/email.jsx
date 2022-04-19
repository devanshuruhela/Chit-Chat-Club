import React from 'react'
import Card from '../../../../Components/Shared/Card/card.component'
import Button from '../../../../Components/Shared/Button/button.component'
import logo from '../../../../images/email-emoji.png'
const Email = () => {
  return (
    <Card logo={logo} heading='Enter your email id'>
          <div>
            <Button btntext="Next"></Button>
          </div>
      </Card>
  )
}

export default Email