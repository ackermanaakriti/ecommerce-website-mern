// PinkForm.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import '../Cart.css'



const ShipppingAdress = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: '',
    company: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
  };

  return (
   
        <Box container className='billingaddress__container' >
          <Typography m={2} variant='p'>Billing Address</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{gap:'2rem',margin:'1rem'}} display={'flex'}>
      
        <TextField
        size='small'
        className='textfield__'
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
   
        />
    
       
        <TextField
        size='small'
        className='textfield__'
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
     
        </Box>

        <Box sx={{gap:'2rem',margin:'1rem'}}  display={'flex'}>
        <TextField
        size='small'
        className='textfield__'
          label="Phone Number"
          variant="outlined"
          fullWidth
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
         <TextField
        size='small'
          label="Company"
          variant="outlined"
          fullWidth
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        </Box>

<Box sx={{gap:'2rem',margin:'1rem'}}  display={'flex'}>
        <TextField
        size='small'
          label="Zip Code"
          variant="outlined"
          fullWidth
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel size='small'>Country</InputLabel>
          <Select size='small'
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="canada">Canada</MenuItem>
            <MenuItem value="uk">UK</MenuItem>
          </Select>
        </FormControl>

        </Box>

<Box sx={{gap:'2rem',margin:'1rem'}}  display={'flex'}>
        <TextField
        size='small'
          label="Address1"
          variant="outlined"
          fullWidth
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <TextField
        size='small'
          label="Address2"
          variant="outlined"
          fullWidth
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        </Box>
       
      </form>
      <Box display={'flex'}>
      <button className='billingaddress--buttons' >Back To Cart</button>
      <button  className='billingaddress--buttons' >Proceed To Payment</button>


      </Box>
      </Box>
   
  );
};

export default ShipppingAdress;

