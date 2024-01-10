import React from 'react'
import { Box } from '@mui/material';
import Review from './Review';
import Description from './Description';

const DetailSelect = {
    'description': Description,
    'review': Review
  }

const ProductDetailsReview = ({detailView}) => {
    const DefaultView = DetailSelect[detailView]??<></>
  return (
    <Box>
        <DefaultView/>
    </Box>
  )
}

export default ProductDetailsReview
