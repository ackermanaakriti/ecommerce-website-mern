import React,{useEffect} from 'react'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import burnimg from '../../images/minimalist.jpg'
import bagimg from '../../images/bagtrasnparent.png'

import AOS from "aos";
import "aos/dist/aos.css";
import './Home.scss'
import Navbar from '../../Global/Navbar/Navbar'
import TopNavbar from '../../Global/Navbar/TopNavbar';
import StaticData from './StaticData';
import CardProduct from '../CardProduct/CardProduct';
import SwiperCard from '../CardProduct/SwiperCard';
import Tranparentdiv from './Tranparentdiv';


const Home = () => {

  useEffect(() => {
    AOS.init({
     
     
     
    });
  }, []);
  return (
    <>
    <div className='home--container'>
      
      <Navbar/>
    <Container>
     <Grid container>
      <Grid className='home--content'data-aos='fade-right' data-aos-delay='400'  xs={5}>
        <h1>Best Seller Prime <br></br> Starting from just $99</h1>
        <button>Buy Now</button>
      </Grid>
      <Grid className='photos--home' xs={7}>
        <div  data-aos='slide-left'> <img src={bagimg}/>
        </div>
      </Grid>
     </Grid>
   </Container>
    </div>
 
    <StaticData/>
    
   <SwiperCard/>
   <Tranparentdiv/>
    </>
  )
}

export default Home