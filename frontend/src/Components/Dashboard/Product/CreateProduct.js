import { useState } from "react";
import React from "react";
import { Container, Grid } from "@mui/material";

import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import DashSidebar from "../Dashboardf/DashSidebar";
import './product.css'

const CreateProduct = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    category: "",
    price: "",
    stock:'',
    image:''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Username is required"),
    description: Yup.string().required("description is required"),
    category: Yup.string().required("category is required"),
    price: Yup.number().required("price is required"),
    stock: Yup.number().required("stock is required"),
  });

  const handleSignUp = async (values) => {
    console.log("helo", values);
    try {

      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('image', values.image);
      formData.append('category', values.category);
      formData.append('price', values.price);
      formData.append('stock', values.stock);
    


      const res = await axios.post(
        "http://localhost:8020/createproduct",
        values
      );
      console.log("User registered successfully");

      
      if (res && res.data) {
        toast.success("login successfull");

       console.log(formData)
      }
    } catch (error) {
      console.error("Error registering user", error);
      toast.error("user already exist");
    }
  };
  return (
    <>
      <div className="createproduct--form">
        <Grid container>
          <Grid xs={3}>
            <DashSidebar />
          </Grid>
          <Grid xs={9}>
          <h1 className='h1--header'>Create Product</h1>
            <div className='form--productcreate'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignUp}
            >
              <Form>

                <div style={{display:'flex',justifyContent:'space-around' }}>
                  <div style={{display:'flex',flexDirection:'column'}}>
                <label className='formik-label'> Name</label>
                <Field className='formik-feild' type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div  style={{display:'flex',flexDirection:'column'}}>
                <label className='formik-label'>Category</label>
                
                <Field className='formik-feild' type="text" name="category" />
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error"
                />
                </div>
                </div>
                <div style={{display:'flex', flexDirection:'column',margin:'auto',width:'60%'}}>
                <label className='formik-label'>Description</label>
                <Field as="textarea" className='formik-description' type="text" name="description" />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error"
                />
                </div>

              <div style={{display:'flex',justifyContent:'space-around' }}>
                <div style={{display:'flex',flexDirection:'column'}}>
                <label className='formik-label' >Price</label>
                <Field className='formik-feild' type="number" name="price" />
                <ErrorMessage name="price" component="div" className="error" />
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                <label className='formik-label' >Stock</label>
                <Field className='formik-feild' type="number" name="stock" />
                <ErrorMessage name="stock" component="div" className="error" />
                </div>

                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                <label className='formik-label' >Upload Image</label>
                <Field  className='formik-feild' type="file" name="image" />
                <ErrorMessage name="image" component="div" className="error" />
                </div>
                <div style={{display:'flex',margin:'auto'}}>
                <button  className='savechanges--btn' type="submit">Submit</button>
                </div>
              </Form>
            </Formik>
            </div>
          </Grid>
        </Grid>

        <Toaster />
      </div>
    </>
  );
};

export default CreateProduct;
