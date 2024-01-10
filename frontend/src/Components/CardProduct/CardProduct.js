import { Container } from '@mui/material'
import React from 'react'
import proudimg from '../../images/one.png'
import './CardProduct.css'
import Rating from '@mui/material/Rating';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link } from 'react-router-dom';

const CardProduct = ({title,img,price}) => {
  return (
    <>
    <div className='card--container'>
        <Container>
            

            

            <div className="card">
            
    <img src={proudimg}/> 
    <div className="card-content">
      <h2 className="card-title">Woolen Sweater</h2>
      {/* <p className="card-text">Lorem ipsum dolor sit amet</p> */}
      <Rating sx={{padding:'3px'}} name="read-only" value='3' readOnly />
      <div className='iconsandprice'>
        <p>$300</p>
        <Link to='/productdetail'>
        <RemoveRedEyeOutlinedIcon sx={{color:'gray'}}/>
        </Link>

      </div>
    </div>
    </div>
        </Container>
    </div>
    </>
  )
}

export default CardProduct