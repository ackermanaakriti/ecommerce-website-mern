import React from 'react'
import Navbar from '../../../Global/Navbar/Navbar'
import { Container, Grid } from '@mui/material'
import CardProduct from '../../CardProduct/CardProduct'

const CategoryPage = () => {
  return (
   <>
   <div className='categorypage--container'>
    <Navbar/>

    <Container>
        <Grid container>
            <Grid xs={3}>
                <CardProduct/>
            </Grid>
            <Grid xs={3}>
            <CardProduct/>
            </Grid>
            <Grid xs={3}>
            <CardProduct/>
            </Grid>
            <Grid xs={3}>
            <CardProduct/>
            </Grid>
        </Grid>

        <Grid container>
            <Grid xs={3}>
                <CardProduct/>
            </Grid>
            <Grid xs={3}>
            <CardProduct/>
            </Grid>
            <Grid xs={3}>
            <CardProduct/>
            </Grid>
            <Grid xs={3}>
            <CardProduct/>
            </Grid>
        </Grid>
    </Container>
   </div>
   </>
  )
}

export default CategoryPage