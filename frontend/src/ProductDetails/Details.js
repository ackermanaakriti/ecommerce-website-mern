import React, { useState } from 'react'
import { Box, Container} from '@mui/system';
import firstimg from '../images/one.png'
import secimg from '../images/one.png'
import ProductInfo from './ProductInfo';
import ShowReview from './ShowReview';
const DetailsS = () => {
  const [mainImg , setImage]= useState(firstimg);

  return (
   <>
  <Container>
<Box sx={{display:'flex' , justifyContent:'center'}}  pt={10}>

  {/* product image */}
    <Box sx={{}}>
        <img style={{height:'350px' ,width:'350px'}}  src={mainImg}/>
    </Box>

{/* product description name, option type */}
           <ProductInfo/>
</Box>

{/* product image selection */}
   <Box  ml={18}>
    <Box >
        <img src={firstimg} style={{height:'100px', border:'2px solid pink'}}   onClick={()=>setImage(firstimg)}/>
        <img src={secimg} style={{height:'100px',border:'2px solid pink' , ml:'3px'}}   onClick={()=>setImage(secimg)}/>

    </Box>
     </Box>

   {/* Description and review */}
   <ShowReview/>

</Container>
   </>
  )
}

export default DetailsS
