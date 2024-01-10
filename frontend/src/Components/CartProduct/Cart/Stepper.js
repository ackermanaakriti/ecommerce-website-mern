import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, StepButton } from '@mui/material';
import MainCart from './MainCart';
import { Box } from '@mui/system';
import {Container} from '@mui/system';
import { Typography } from '@mui/material'
import {DetailAddressCart} from './DetailAddress/DetailAddress';
import PaymentOption from './Payement/PaymentOption';
import './Cart.css'



 
const stepstyle={
  padding:'10px',

   ".Mui-active":{
  ".MuiSvgIcon-root ":
  {
    color:'#D11B66'
  },
  ".MuiStepConnector-line":
  {
   borderColor:'#D11B66',
   padding:'3px'
  }
}

, ".Mui-completed":
{
  ".MuiSvgIcon-root ":
  {
    color:'#D11B66'
  },
  ".MuiStepConnector-line":
  {
   borderColor:'#D11B66',
   padding:'3px'
  }
}
}
function CustomStepLabel({ label }) {
  return (
    <StepLabel>
      <Typography variant="body1">{label}</Typography>
    </StepLabel>
  );
}

const CartStepper = () => {
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const [activeStep, setActiveStep] = useState(0);

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};


return (
  <Box sx={{mt:'3rem'}} >
  <Box>
    <Stepper sx={stepstyle} activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={label}>
          <StepButton>{label}</StepButton>
        
        </Step>
      ))}
    </Stepper>
    <Box>
      {activeStep === steps.length ? (
        <Box>
          <p>All steps completed</p>
        </Box>
      ) : (
        <Box>
          {activeStep === 0 &&  <MainCart/>} {/* Render the first custom component */}
          {activeStep === 1 && <DetailAddressCart/>} {/* Render the second custom component */}
          {activeStep === 2 && <PaymentOption/> } {/* Render the third custom component */}
          <Box m={3} sx={{display:'flex', justifyContent:'space-between'}}>
            <Button  className='cart--buttons' sx={{backgroundColor:'#CC115E',color:'whitesmoke'}} disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button className='cart--buttons' sx={{backgroundColor:'#CC115E',color:'whitesmoke'}} variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  </Box>
  </Box >
);

}

export default CartStepper
