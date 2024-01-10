import React, { useState } from 'react'
import { Box } from '@mui/system';
import firstimg from '../images/secshoes.jpg'
import secimg from '../images/watch.png'


const Dynamicimg = () => {
    const [mainImg , setImage]= useState(firstimg);
  

  return (
   <>
   <Box>
    <Box >
        <img style={{height:'100px'}} src={mainImg}/>
        
        <img src={firstimg}   onClick={()=>setImage(firstimg)}/>
        <img src={secimg}  onClick={()=>setImage(secimg)}/>

    </Box>
   </Box>
   </>
  )
}

export default Dynamicimg
