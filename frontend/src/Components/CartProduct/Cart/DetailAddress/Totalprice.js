import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box, width } from '@mui/system'
import '../Cart.css'
import {Grid }from '@mui/material'
import { TextField } from '@mui/material'


const Totalprice = () => {
  return (
    <>
   <Box sx={{width:'350px', mt:'4rem'}}>
   
   
   {/* <Grid sx={{display:'flex'}}  >
    <Grid sx={4}><Typography className='total__typefield'>Subtotal:</Typography></Grid>
    <Grid sx={3}>hello</Grid>
    <Grid sx={5}> <span className='pricetagspan'>$26100</span></Grid>
   </Grid>
    */}
    <Box className='typo__container'>
     <Typography className='total__typefield'>Shipping:</Typography>
     <span className='pricetagspan'>$26100</span>
     </Box>
     <Box className='typo__container'>
    <Typography className='total__typefield'>Shipping:</Typography>
    <span className='pricetagspan'>$26100</span>
    </Box>
<Box className='typo__container'>
    <Typography className='total__typefield'>Tax:</Typography>
    <span className='pricetagspan'>$20</span >
    </Box>
<Box className='typo__container'>
    <Typography className='total__typefield'>Discount: </Typography>
    <span className='pricetagspan'>$200</span>
    </Box>
<Box className='totalpricespan'>
    <Typography><span className='totalpricespan'>$26100.00</span></Typography>
    </Box>

<Box  sx={{mt:'1rem', }}>
<TextField
      
      label="Voucher"
      variant="outlined"
      size="small"
      sx={{width:'100%'}}
    />
   
</Box>
<Box sx={{mt:'1rem', }}>
<button className='applyvoucher--button'  >APPLY VOUCHER</button>
</Box>
   </Box>
 
    </>

  )
}

export default Totalprice
