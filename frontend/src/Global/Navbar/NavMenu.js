import { Grid } from '@mui/material'
import React, { useState,useEffect } from 'react'
import './Navbar.css'
import CategoryIcon from '@mui/icons-material/Category';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Container} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import {toast,Toaster} from 'react-hot-toast'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Link} from 'react-router-dom'



const NavMenu = () => {

    const [categories,setCategories]= useState([])

  const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };

    const getAllCategory = async () => {
        try {
          const res = await axios.get("http://localhost:8020/getcategory");
          console.log(res)
          if (res.data.success) {
            setCategories(res.data.category);
            console.log(" from create category",res)
          }
        } catch (error) {
          console.log(error);
          toast.error("Something wwent wrong in getting catgeory");
        }
      };
    
      useEffect(() => {
        getAllCategory();
      }, []);
      console.log( "from navmenu",categories)



  return (
   <>
   <Container>
    <Grid container>
        <Toaster/>

        <Grid xs={3}>

            <div >

      
            <div className='menu--category--button'>
                <select  aria-placeholder='Category' style={{marginLeft:'10px', display:'flex',flexDirection:'column'}} value={selectedCategory} onChange={handleCategoryChange}>
                    <option>Select Category</option>
              
            

                {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
               
            
               
                </select>
             
                
           
             
           
               
               
            </div>

            </div>
           
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={8}>
            <ul className='navmenu--ul'>
                <Link style={{textDecoration:'none'}} to='/'> <li>Home </li></Link>
                <Link style={{textDecoration:'none'}} to='/'>  <li>Category  <ExpandMoreIcon sx={{display:'flex',alignItems:'center',justifyContent:'center'}}/></li></Link>
           
                <Link style={{textDecoration:'none'}} to='/'><li>About Us </li></Link>

                <Link  style={{textDecoration:'none'}}to='/'><li>Blog </li></Link>
                <Link style={{textDecoration:'none'}} to='/'><li>Contact Us </li></Link>
               
            </ul>
        </Grid>
    </Grid>
   </Container>

   </>
  )
}

export default NavMenu