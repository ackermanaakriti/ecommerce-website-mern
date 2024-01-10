import { Container } from '@mui/material'
import React from 'react'
import {Grid} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import SearchNavbar from './SearchNavbar';
import NavMenu from './NavMenu';




const Navbar = () => {
  return (
    <>
    <div className='navbar--wrapper'>
    <TopNavbar/>
      <Container>
        <SearchNavbar/>
        <NavMenu/>
     

      </Container>
    </div>
    
    </>
  )
}

export default Navbar