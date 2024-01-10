import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Image } from '@mui/icons-material'
import { Container } from '@mui/system'
import img from './secshoes.jpg'
import CommentsCart from './CommentsCart'
import AddSubbtn from './AddSubbtn'
const CartProductinfo = () => {
  return (
    <>
   
    <Box mt={3} sx={{width:'60%',ml:'2rem' ,pl:'5px'}}>
     <Box display={'flex'}>
        <Box>
          <img height={'150px'} src={img}/>
        </Box>
        <Box mt={2} ml={3}>

          {/* name of the product */}
            <Typography sx={{fontSize:'20px',color:'#575353',
            fontWeight:'600',lineHeight:'1.5'}} variant='p'>
                Silver High Neck Sweater
            </Typography>

            {/* price tag of the product */}
           <AddSubbtn/>







                  </Box>
                
                 </Box>
              </Box>
         
   
   
    </>
  )
}

export default CartProductinfo
