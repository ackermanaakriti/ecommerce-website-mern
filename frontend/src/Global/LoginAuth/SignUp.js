import { useState } from 'react'
import React from 'react'
import {Container} from '@mui/material'
import { useRegisteruserMutation } from '../../Redux/Api'
import axios from 'axios'
import './Login.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



const SignUp = () => {
  const navigate = useNavigate();
  

  const initialValues = {
    name: '',
    email: '',
    password: '',
  
  };

  
    
    
  

    const validationSchema = Yup.object({
      name: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
          'Password must contain at least one letter, one number, and one special character'
        )
        .required('Password is required'),
    
    });

    

    
    const handleSignUp= async (values)=>
    {
       
        console.log("helo",values)
        try {
           const res = await axios.post('http://localhost:8020/register', values);
            console.log('User registered successfully');
           
            console.log(res)
                 if(res && res.data)
                 {
                  toast.success('login successfull')
                //  setAuth({...auth, user:res.data.user,token:res.data.token})
                 }
                 localStorage.setItem('authsignup',JSON.stringify(res.data))
           navigate('/')
          
          } catch (error) {
            console.error('Error registering user', error);
            toast.error('user already exist')
          }
          
        

    }
  return (
  <>
  <div className='register--form'>
    <Container>
     
     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignUp}>
     <Form >
        <label>User Name</label>
        <Field type='text'  name='name'   />
        <ErrorMessage name="name" component="div" className="error" />

        <label>User Email</label>
        <Field type='email'   name='email' />
        <ErrorMessage name="email" component="div" className="error" />

        <label>Password</label>
        <Field type='password'   name='password' />
        <ErrorMessage name="password" component="div" className="error" />

        <button  type='submit'>Submit</button>

       
     </Form>
     </Formik>
     <Toaster/>
    </Container>
  </div>
  </>
  )
}

export default SignUp