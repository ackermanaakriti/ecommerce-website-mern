import React from 'react'



import Stepper from './Stepper'
import StepperofCart from './Stepper'
import CartProductinfo from './CartProductinfo'
import CommentsCart from './CommentsCart'
import { Box, Container} from '@mui/system'

const MainCart = () => {
  return (
    <>
    <Container>
    <Box>
        
<Box display={'flex'}>
<CartProductinfo/>
<CommentsCart/>



</Box>




    </Box>
    </Container>
    </>
  )
}

export default MainCart
