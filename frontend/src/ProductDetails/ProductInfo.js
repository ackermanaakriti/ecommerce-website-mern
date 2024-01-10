
import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button  } from '@mui/material'
import HoverRating from './Rating'
import { Link } from 'react-router-dom'
import './Pdp.css'


const ProductInfo = () => {
  return (
   <>
   <Box>
   <Box pl={10}>
    <Box>
       <Typography sx={{fontWeight:'700' , }} fontSize={'30px'} color={'#232423'}  variant='h1'>
       NikeCourt Zoom Vapor Cage
       </Typography>
    </Box>

{/* brand */}
    <Box sx={{ display:'flex', flexDirection:'column'}}>
       <Typography pb={1} pt={2} color={'gray'}  variant='p'>
              Brand:xiaomi
       </Typography>

 {/* rating */}
      <HoverRating/>
    </Box>

{/* option */}
   <Box pt={2}>
    <Typography fontSize={15}>
      Option
    </Typography>
    {/* option button list */}
    <Box pt={0.5}>
      <Button sx={{backgroundColor:'#d23f57', color:'whitesmoke',p:'15px',textTransform:'lowercase',
       borderRadius:'4px', height:'30px' }}>option 1</Button>
        <Button sx={{backgroundColor:'#d1d4c9', color:'black',ml:'5px',p:'15px',textTransform:'lowercase',
       borderRadius:'4px', height:'30px' }}>option 2</Button>
       <Button sx={{backgroundColor:'#d1d4c9', color:'black',ml:'5px',p:'15px',textTransform:'lowercase',
       borderRadius:'4px', height:'30px' }}>option 3</Button>
       <Button sx={{backgroundColor:'#d1d4c9', color:'black',ml:'5px',p:'15px',textTransform:'lowercase',
       borderRadius:'4px', height:'30px' }}>option 4</Button>
    </Box>

   </Box>

   {/* type and list */}
   <Box pt={2}>
   <Typography fontSize={15}  variant='subtitle'>
    Type
    </Typography>
{/* type button list */}
  <Box pt={1}>
      <Button sx={{backgroundColor:'#d23f57', color:'whitesmoke',textTransform:'lowercase',
       borderRadius:'4px', height:'30px' }}>type 1</Button>
         <Button sx={{backgroundColor:'#d1d4c9', color:'black',ml:'5px',textTransform:'lowercase',
       borderRadius:'4px', height:'30px' }}>type 2</Button>
        <Button sx={{backgroundColor:'#d1d4c9', color:'black',ml:'5px',textTransform:'lowercase',
       borderRadius:'4px', height:'30px' }}>type 3</Button>
   </Box>

   </Box>

   {/* price tag */}
   <Box >
   <Typography pt={3} variant='h1' fontWeight={'bold'} fontSize={25} color={'#d23f57'}>
   $245.00
    </Typography>
    <Typography color={'gray'}>
  stock available
    </Typography>
   </Box>

   {/* Add to cart button */}
   <Box pt={2.5}>
 
    
   <button className='addtoCart--btn' >
      <Link style={{textDecoration:'none', color:'whitesmoke'}} to={'/cart'}>
      Add to Cart </Link></button>
    
   
   </Box>
   <Box>


    <Typography pt={2} color={'gray'}>
    Sold By : Mobile store
    </Typography>
   </Box>
    </Box>
   </Box>
   </>
  )
}

export default ProductInfo
