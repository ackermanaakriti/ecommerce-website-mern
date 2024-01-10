import React, { useState } from 'react';
import { Radio, FormControlLabel, Typography } from '@mui/material';
import { Box} from '@mui/material';
import '../Cart.css'
import CreditPay from './CreditPay';
import Paypal from './Paypal';

const radioStyle={
  ".Mui-checked":{
    color:'#d42c6b'
  }
}

function CashPay() {
    const [ShowCreditPay, setShowCreditpayComponent] = useState(false);
    const [ShowCPaypalPay, setShowPaypalComponent] = useState(false);

    const [selectedValue, setSelectedValue] = useState('');


    const handleCreditPay = () => {
    setShowCreditpayComponent(!ShowCreditPay)
    setShowPaypalComponent(false)
    
    };
     const handlePaypal=()=>
     {
      setShowPaypalComponent(!ShowCPaypalPay)
      setShowCreditpayComponent(false)

     }
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

  return (
    <Box className='paymentmethod__container' >
        <Box >
    
      <FormControlLabel
     sx={radioStyle}
        control={<Radio />}
        label="Pay with Credit Card"
        value="option1"
        name='payment-option'
      
       
        onClick={handleCreditPay}
        checked={selectedValue === 'option1'}
        onChange={handleChange}
      />
      <Box>
{ShowCreditPay && <CreditPay/>}
      </Box>
      </Box>

      <Box sx={{mt:'0.5rem'}}>
      <FormControlLabel
       sx={radioStyle}
        control={<Radio />}
        label="Pay with Paypal"
        value="option2"
        name='payment-option'
        checked={selectedValue === 'option2'}
        onChange={handleChange}
        onClick={handlePaypal}
      />
      <Box>
      {ShowCPaypalPay && <Paypal/>}
      </Box>
      </Box>

      <Box sx={{mt:'0.5rem'}} >
      <FormControlLabel
       sx={radioStyle}
        control={<Radio />}
        label="Cash on Delivery"
        value="option3"
        name='payment-option'
        checked={selectedValue === 'option3'}
        onChange={handleChange}
        
      />
      </Box>
     
    </Box>
  );
}

export default CashPay;

