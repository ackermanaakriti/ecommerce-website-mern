import { Box } from '@mui/system'
import React from 'react'
import { Button, TextField } from '@mui/material';

const CreditPay = () => {

    const [formData, setFormData] = React.useState({
        cardnumber: '',
        expdate: '',
        nameoncard: '',
       
      });    


    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <>
<Box sx={{width:'110%'}}>
    <form>
  <Box>
    <Box sx={{gap:'3rem',mt:'1rem'}} display={'flex'}>

        <TextField
        size='small'
          label="Card Number"
          variant="outlined"
          fullWidth
          name="cardnumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

<TextField
        size='small'
          label="Exp Date"
          variant="outlined"
          fullWidth
          name="expdate"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        </Box>
<Box sx={{gap:'3rem' , mt:'2rem'}} display={'flex'}>
<TextField
        size='small'
          label="Name on Card"
          variant="outlined"
          fullWidth
          name="nameoncard"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

<TextField
        size='small'
          label="Name on Card"
          variant="outlined"
          fullWidth
          name="nameoncard"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        </Box>
        <Box sx={{mt:'1em'}}>
        <Button size='small' sx={{backgroundColor:'#d42c6a',color:"whitesmoke"}} >Submit</Button>

        </Box>
        </Box>

        </form>
       

</Box>
    </>
  )
}

export default CreditPay
