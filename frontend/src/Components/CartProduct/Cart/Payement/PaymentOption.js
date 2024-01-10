import { AddBox } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import Totalprice from '../DetailAddress/Totalprice'
import CashPay from './CashPay'
import {Grid }from '@mui/material'

const PaymentOption = () => {
  return (
    <>
    <Box>
        <Grid sx={{justifyContent:'space-between'}} display={'flex'}  >
            <Grid><CashPay/></Grid>
            <Grid sx={{paddingRight:'5rem',margin:'1rem'}} ><Totalprice/></Grid>
        </Grid>
    </Box>
    </>
  )
}

export default PaymentOption
