import { Container, Grid } from '@mui/material'
import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo from '../../images/logo2.svg'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'

import { toast,Toaster } from 'react-hot-toast';
import { ProductContext } from '../../Components/Context/Context';



const SearchNavbar = () => {

    const navigate= useNavigate();
    const {setQuery,getSearchProduct} = useContext(ProductContext)
    const [query,setSearch]= useState()

    const[isOpen,setOpen]=useState(false)
    const handleSearch=(e)=>
    {
       setSearch(e.target.value)
       setQuery(query)

    }
   
    const handleSearchClick =()=>
    {
      console.log('hello from search click')
      getSearchProduct()
      navigate('/searchedproduct')
    }
    console.log('from search',query)
    const hanldeLogOut =()=>
    {
        // setAuth({...auth,user:null,token:''})
        // localStorage.removeItem('authsignup')
        // toast.success('log out successfully')
        // navigate('/')
   
    }
  return (
    <>
    <Container>
        <Grid container>
            <Toaster/>
            <Grid xs={3}>
                <div className='logoimg'>
                <img  className='logoimage' src={logo}/>
                </div>
            </Grid>
            <Grid xs={6}>
                <div className='searchbar--wrapper'>
                    <div className='search--here'>
                      <input onChange={handleSearch} placeholder='search here..'/>
                      <SearchIcon  onClick={handleSearchClick} sx={{paddingTop:'2px',color:'#3d3b3b',alignItems:'center',justifyContent:'end'}} />

                    </div>
                   
                </div>
            </Grid>
            <Grid xs={3}>
                <div className='leftcontent--icon'>
                <LocalMallIcon sx={{padding:'10px',fontSize:'30px',color:'gray'}}/>

                     {/* {auth.token?(
                        <>
                        <button onClick={()=>setOpen((prev)=>!prev)}>  <AccountCircleIcon  sx={{padding:'10px',fontSize:'30px',color:'gray'}}/></button>
                      
                          <dialog open={isOpen}>
                            <div>
                                {auth.user.role==='admin'&&(
                                    <>
                        <Link style={{textDecoration:'none',color:"black",fontWeight:'600',fontSize:"16px"}} to='/dashboard'>Admin</Link>
                      
                                    </>
                                )}

                          {auth.user.role==='user'&&(
                                    <>
                        <Link style={{textDecoration:'none',color:"black",fontWeight:'600',fontSize:"16px"}} to='/dashboard'>Cart</Link>
                      
                                    </>
                                )}
                                  <Link  style={{textDecoration:'none',color:"black",fontWeight:'600',fontSize:"16px"}} to='orders'>Orders</Link>
                                <button onClick={hanldeLogOut}>Log Out</button>
                                
                            </div>
                          </dialog>
                          </> )
                          :
                         ( 
                            <>
                             <Link to='/signup' style={{textDecoration:'none',color:"black",fontWeight:'600',fontSize:"16px",cursor:'pointer'}}>Sign Up</Link>
                             <Link to='/login' style={{textDecoration:'none',color:"black",fontWeight:'600',fontSize:"16px",cursor:'pointer'}}>Log In</Link></>
                            )
} */}
              
               
                </div>
               
            </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default SearchNavbar