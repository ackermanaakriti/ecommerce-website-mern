import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './product.css'
import CreateProduct from './CreateProduct'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFetchProductQuery } from '../../../Redux/Api';
import DashSidebar from '../Dashboardf/DashSidebar';

const ProductList = () => {
  const [oaSisBooks,setToOasis]= useState();

  useEffect(() => {
      axios.get('http://localhost:8020/products')
      .then(result => setToOasis(result.data))
      .catch(err => console.log(err))
  }, [])



console.log("heloo from product list",oaSisBooks)

// const{data:oaSisBooks}= useFetchProductQuery();

  
  return (
    <>
      <div className='productlist--wrapper'>
   
      <Grid container>
        <Grid xs={3}>
         <DashSidebar/>
        </Grid>

        <Grid xs={9}>
          <h1 className='h1--header'>Product List</h1>

        <table > 
          <thead>
           
            <th scope='col'>Product Name</th>
            <th>Product Category</th>
            <th>Product Brand</th>
            <th>Product Description</th>
            <th>Action</th>
            </thead>
            <tbody>
             
                {  oaSisBooks?.allproducts.map((item)=>(
                  <tr key={item._id}>
                     
                  <td>{item.name}</td>
                  <td style={{ overflow: 'hidden' }}>{item.category}</td>
                  <td>Brand</td>
                  <td>{item.description}</td>
                  <td>
                    <Link to={`/products/${item._id}`}><RemoveRedEyeIcon/></Link>
                  
                    </td>
                  </tr>
                )
                )}
                </tbody>
                
         
            
        </table>
      
        </Grid>
       
      </Grid>
      
        
   
    
    </div>
    </>
  )
}

export default ProductList