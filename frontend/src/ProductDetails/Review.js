import { Container } from '@mui/system'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import {Box }from '@mui/material';
const Review = () => {
    
  return (
 <>

    <Box >
        <Box sx={{display:'flex'}}>
        <Box>
        <Avatar  sx={{height:'48px', width:'48px'}} alt="Remy Sharp" src="" />
        </Box>
        <Box ml={3}>
            <Typography  sx={{fontSize:'18px' 
            , fontWeight:'500' , color:'#4b4f4c'}} variant='p' >
             Jannie Schumm
            </Typography>
            <Box mt={1} display={'flex'}>
            <Rating sx={{fontSize:'1.25', }}
        name="simple-controlled"
        defaultValue={2.5}
      />
      <Box ml={1} sx={{fontSize:'15px', color:'rgb(75, 86, 107)' ,p:'4px' }}> 2.5 years ago</Box>
       </Box>
         </Box>
        </Box>
       </Box>
    <Box mt={1}>
        <Typography sx={{fontSize:'16px', color:'rgb(75, 86, 107)'}} variant='p'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
        </Typography>
    </Box>

 </>
  )
}

export default Review
