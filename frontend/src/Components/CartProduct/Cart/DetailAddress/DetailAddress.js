import React from 'react'
import { Grid } from '@mui/material'
import ShipppingAdress from './ShippingAddrs'
import BillingAddress from './BillingAddress'
import Totalprice from './Totalprice'

export const DetailAddressCart = () => {
  return (
    <>
    <Grid  >
<Grid display={'flex'} sm={7}><ShipppingAdress/>

<Grid sm={5}><Totalprice/></Grid>

</Grid>

<Grid sm={4}><BillingAddress/></Grid>
    </Grid>
    </>
  )
}


