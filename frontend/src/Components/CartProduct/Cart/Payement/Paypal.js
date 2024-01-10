import React, { useState } from 'react'
import { Box, TextField } from '@mui/material';
import {Button }from '@mui/material';
import '../Cart.css'




const Paypal = () => {
  const[paypalMail,setPaypalMail]=useState('');
  const handleChange=(e)=>
  {
    setPaypalMail(e.target.value);
  }
  return (
    <>
 <Box  display={'flex'}>
  <Box sx={{width:'400px'}}  >
 
<TextField
        size='small'
          label="Paypal Email"
          variant="outlined"
          fullWidth
          name="nameoncard"
          
       onchange={handleChange}
          required
        />
          </Box>
        <Box>
        <Button size='small' sx={{backgroundColor:'#d42c6a',color:"whitesmoke" , m:'3px'}}>Submit</Button>
        </Box>

 </Box>
    </>
  )
}

export default Paypal
