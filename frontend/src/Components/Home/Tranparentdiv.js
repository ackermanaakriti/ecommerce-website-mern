import { Container } from '@mui/material'
import React from 'react'
import './Home.scss'

const Tranparentdiv = () => {
  return (
    <>
    <div className='transparentdiv'>
        <Container>
            <div className='trasnparentdiv--container'>
                <h3>Summer Season Sale</h3>
                <p>Free shipping on orders over $99</p>
                <button>Shop Now</button>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Tranparentdiv