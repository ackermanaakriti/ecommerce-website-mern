import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Description = () => {
  return (
   <>
   <Box>
<Box>
    <Typography sx={{fontSize:'20px' , fontWeight:'bold' , color:'#3e423f'}} variant='h2'>
        Specification:
    </Typography>
    <Box mt={1.5}>
        <li  style={{color:'#3e423f', listStyle:"none", padding:'3px'}}>Brand:beats</li>
        <li style={{color:'#3e423f', listStyle:"none", padding:'3px'}}>Model: S450</li>
        <li style={{color:'#3e423f', listStyle:"none", padding:'3px'}}>Wireless Bluetooth Headset</li>
        <li style={{color:'#3e423f', listStyle:"none", padding:'3px'}}>FM Frequency Response: 87.5 – 108 MHz</li>
        <li style={{color:'#3e423f', listStyle:"none", padding:'3px'}}>Made in China</li>
    </Box>
</Box>
   </Box>
   </>
  )
}

export default Description
