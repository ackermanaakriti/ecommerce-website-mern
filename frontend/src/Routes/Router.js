import React from 'react'
import {
    Routes,
    Route,Redirect,Navigate}  from 'react-router-dom'

import CreateProduct from '../Components/Dashboard/Product/CreateProduct'
import ProductList from '../Components/Dashboard/Product/ProductList'
import ProductDetail from '../Components/Dashboard/Product/DetailProduct'
import DetailProduct from '../Components/Dashboard/Product/DetailProduct'
import Dashboard from '../Components/Dashboard/Dashboardf/Dashboard'
import Home from '../Components/Home/Home'
import LogIn from '../Global/LoginAuth/LogIn'
import MainCart from '../Components/CartProduct/Cart/MainCart'
import DetailsS from '../ProductDetails/Details'
import SignUp from '../Global/LoginAuth/SignUp'
import Aboutus from '../Components/Pages/Aboutus'
import Categorizedpage from '../Components/Pages/productpaages/Categorizedpage'
import CreateCategory from '../Components/Dashboard/Category/CreateCategory'
import Searchedpage from '../Components/Pages/productpaages/SearchedPage'


const Routers = () => {

  return (
    <>
    <Routes >
      
 
        
    <Route path='/' element={<Home/>}/>
    


<Route path='/dashboard' element={<Dashboard/>}/>

<Route path='/createproduct' element={<CreateProduct/>}/>
 <Route path='/products' element={<ProductList/>} />
 <Route path='/products/:id' element={<DetailProduct/>} />
 <Route path='/login' element={<LogIn/>}/>
 <Route path='/cart' element={<MainCart/>}/>
 <Route path='/productdetail' element={<DetailsS/>}/>
 <Route path='/signup' element={<SignUp/>}/>
 <Route path='/aboutus' element={<Aboutus/>}/>
 <Route path='/productpages' element ={<Categorizedpage/>}/>
 <Route path='/createcategory' element ={<CreateCategory/>}/>
 <Route path='/searchedproduct' element ={<Searchedpage/> }/>



 

</Routes>
    </>
  )
}

export default Routers