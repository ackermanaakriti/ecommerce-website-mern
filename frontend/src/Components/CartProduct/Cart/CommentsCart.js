import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Shippingesti from './Shippingesti';
import './Cart.css'
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    }]


const CommentsCart = () => {
  return (
    <>
    <Box  mt={3} sx={{width:'35%'}}>
        <Box>
            <Box sx={{display:'flex'}}>
                <Typography>Total: <span style={{justifyContent:'space-between'}}>$458</span></Typography>
            </Box>
            <Box>
                <Box sx={{mt:'1.5rem'}} >
                    <Typography sx={{mb:'3px'}} variant='p'> Additional Comments</Typography>
                    <Box>
                    <TextField sx={{width:'100%'}}
          id="outlined-multiline-static"
        
          multiline
          rows={4}
          defaultValue=""
        />
        </Box>

        <Box sx={{mt:'1.5rem'}} >
        <TextField sx={{width:'100%'}} size='small' id="outlined-basic" label="Voucher" variant="outlined" />
        <Box sx={{mt:'1.5rem'}}>
        <button className='applyvoucher--button'  >APPLY VOUCHER</button>
        </Box>
        </Box>
<Shippingesti/>



                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default CommentsCart
