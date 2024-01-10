import {React,useState}from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import ProductDetailsReview from './ProductDetailsReview.'


const ShowReview = () => {
    const [DetailView, setDetailView] = useState('description');

  return (
    <>
    <Box mt={2} >
   <Box display={'flex'} sx={{width:'60%'}} >
    <Typography className='description-section'  variant='h4' sx={{ fontSize:'17px', color:'#d23f57', fontWeight:'bold', cursor:'pointer',m:'10px' }} onClick={()=>{setDetailView('description')}}>
     Description
    </Typography>
    <Typography className='description-section'  variant='h4' sx={{ fontSize:'17px', color:'#d23f57', fontWeight:'bold', cursor:'pointer',m:'10px' }} onClick={()=>{setDetailView('review')}}>
      Review
    </Typography>
  
   </Box>
   <Box sx={{ m: '5px', width: '60%' }}>
            <ProductDetailsReview detailView={DetailView}/>
          </Box>

   </Box>
    </>
  )
}

export default ShowReview
