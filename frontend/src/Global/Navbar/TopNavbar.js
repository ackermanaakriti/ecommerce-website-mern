import React from 'react'
import './Navbar.css'
import { Container } from '@mui/material'

const TopNavbar = () => {
  return (
    <>
     <div className='topnavbar'>
        <Container>
        <div className='leftcontent'>
            <p className='hot--p'>Hot</p>
            <p>Free Express Shipping</p>
            
        </div>
        <div className='rightcontent'></div>
        </Container>
      </div>
    </>
  )
}

export default TopNavbar