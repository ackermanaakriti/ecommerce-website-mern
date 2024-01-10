// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios, { toFormData } from 'axios';
import { Container, Grid } from '@mui/material';

import {toast,Toaster} from 'react-hot-toast'
import './product.css'
import { useGetProductByIdQuery } from '../../../Redux/Api';
import DashSidebar from '../Dashboardf/DashSidebar';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const DetailProduct = () => {


  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const initialValues = {
    name: product?.name,
    description: product?.description,
    category: product?.category,
    price: product?.price,
  };

  console.log(initialValues,'from formik')

  const validationSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    description: Yup.string().required("Username is required"),
    category: Yup.string().required("Username is required"),
    price: Yup.number().required("Username is required"),
  });

 
 
 

  
 


   
 
   
 
   useEffect(() => {
     const fetchProduct = async () => {
       try {
         const response = await axios.get(`http://localhost:8020/products/${id}`);
         setProduct(response.data.productid);
       } catch (error) {
         console.error(error);
       }
     };
 
     fetchProduct();
   }, []);
 
  

   console.log(product,"from product detial")



  const handleUpdate = async (values) =>{

    try{ 
     await axios.put(`http://localhost:8020/products/${id}`,values )
     toast.success('product updated successfully')
    }
     
   
  
  catch(error)
  {
    console.log(error)
    toast.error('something went wrong')
  }
}

  const deletePhone =  async (id) => {

    try 
    {
    
     await axios.delete(`http://localhost:8020/products/${id}`)
      toast.success('product deleted successfully')
      navigate('/products')
    }
    catch(error)
    {
      console.log(error)
      toast.error('something went wrong')
    }
    
  }



  return (
   
   <>

   <div className='prouductdetail--container'>
    <Toaster/>
    <Grid container>
      <Grid xs={3}>
        <DashSidebar/>
      </Grid>
      <Grid xs={3}>
        <Grid xs={9}>
       
        <div className='form--productdetail'>
        <h1 style={{width:'100%'}} className='h1--header'>Product Detail</h1>
        <Formik enableReinitialize  initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleUpdate}>
     <Form >
        <label className='formik-label'> Product Name</label>
        <Field className='formik-feild' type='text'  name='name'   />
        <ErrorMessage name="name" component="div" className="error" />

        <label className='formik-label'>category</label>
        <Field className='formik-feild'  type='text'   name='category' />
        <ErrorMessage name="category" component="div" className="error" />

        <label className='formik-label'>description</label>
        <Field  as="textarea" className='formik-description'  type='text'   name='description' />
        <ErrorMessage name="description" component="div" className="error" />

        <label className='formik-label'>Price</label>
        <Field className='formik-feild'  type='number'   name='price' />
        <ErrorMessage name="price" component="div" className="error" />

        <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'20px'}} >
                <button  className='savechanges--btn' type='submit' >Save Changes</button>
                <button  className='button--delete' onClick={() =>{deletePhone(product._id)}} >Delete</button>
            </div>
     

       
     </Form>
     </Formik>
        </div>
        </Grid>
    
      </Grid>
    </Grid>
   </div>
  
         
           
         
           
             
   </>
  );
};

export default DetailProduct;
