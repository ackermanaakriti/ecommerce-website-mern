import { Container } from '@mui/material'
import React from 'react'
import {Grid} from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './Home.scss'
import MoneyIcon from '@mui/icons-material/Money';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const StaticData = () => {
  return (
   <>
   <Container>
    <div className='staticdata'>
    
    <Grid container>
        <Grid xs={3}>
            <div className='staticdata--container'>
                <LocalShippingIcon sx={{fontSize:'60px',color:'#4a4948',padding:'20px'}} />
                <div className='staticdata--container--content'>
                    <h5>Fast Delivery</h5>
                    <p>Start from $10</p>
                </div>
            </div>
             </Grid>
        <Grid xs={3}> 
        <div className='staticdata--container'>
                <MoneyIcon sx={{fontSize:'60px',color:'#4a4948',padding:'18px'}} />
                <div className='staticdata--container--content'>
                    <h5>Money Guarantee</h5>
                    <p>Start from $10</p>
                </div>
            </div></Grid>
        <Grid xs={3}>
        <div className='staticdata--container'>
                <AccessTimeOutlinedIcon sx={{fontSize:'60px',color:'#4a4948',padding:'20px'}} />
                <div className='staticdata--container--content'>
                    <h5>Fast Delivery</h5>
                    <p>Start from $10</p>
                </div>
            </div> </Grid>
        <Grid xs={3}>
        <div className='staticdata--container'>
                <LocalShippingIcon sx={{fontSize:'60px',color:'#4a4948',padding:'20px'}} />
                <div className='staticdata--container--content'>
                    <h5>Fast Delivery</h5>
                    <p>Start from $10</p>
                </div>
            </div> </Grid>
        
    </Grid>
    </div>
   </Container>
   </>
  )
}

export default StaticData