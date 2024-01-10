import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import './Cart.css'

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    }]

const Shippingesti = () => {
  return (
    
    <>
     <Box>
        <Box sx={{mt:"1.5rem"}}>
            <Typography m={2} sx={{fontSize:'20px'}}>Shipping Estimates</Typography>
            <TextField sx={{width:'100%'}}
          id="outlined-select-currency"
          select
          label="Country"
          defaultValue="EUR"
          helperText=""
          size='small'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>

        <Box>
            <TextField sx={{width:'100%', mt:'1.5rem'}}
          id="outlined-select-currency"
          select
          label="State"
          defaultValue="New York"
          helperText=""
          size='small'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
        <Box>
        <TextField sx={{mt:'1.5rem',width:'100%'}} id="outlined-basic" label="Zip Code" variant="outlined" size='small' />

        </Box >
        <Box sx={{mt:"1.3rem"}}>
        <button  className='shippingsection--button'>Calculate Shipping</button>
        <button className='shippingsection--button' style={{marginLeft:'6px'}}>Checkout Now</button>
        </Box>
        </Box></>
  )
}

export default Shippingesti
