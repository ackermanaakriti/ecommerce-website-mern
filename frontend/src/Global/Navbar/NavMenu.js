import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import CategoryIcon from "@mui/icons-material/Category";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";
import CardProduct from "../../Components/CardProduct/CardProduct";
import { useNavigate } from "react-router-dom";
import Categorizedpage from "../../Components/Pages/productpaages/Categorizedpage";
import { useContext } from "react";
import { ProductContext } from "../../Components/Context/Context";

// import {
//   useGetAllProductsQuery,
//   useGetProductByCategoryQuery,
// } from "../../Redux/Api";

const NavMenu = () => {
  const {products,fetchProductByCategory} = useContext(ProductContext)
  const navigate = useNavigate();
  const [category, setSelectedCategory] = useState();
  

 
  // // const { data: products } = useGetAllProductsQuery();
  // const [categories, setCategories] = useState([]);

  // const {
  //   data: categoryproduct,
  //   isLoading,
  //   isError,
  // } = useGetProductByCategoryQuery(selectedCategory);
  // console.log(categoryproduct,"hello from category product");



  // const [categorizedproduct, setcategorizedproduct] = useState();
  //  const categories = ['Category1', 'Category2', 'Category3'];

  //  const { data: products, isLoading, isError } = useGetProductByCategoryQuery(selectedCategory);

  // useEffect(() => {
  //   try {
  //     setCategories(products.allproducts);
  //     console.log(categories);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });
  useEffect(()=>
  {
    fetchProductByCategory(category)
  },[category])
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    navigate('/productpages')
   
  
   

  };

  // console.log('product my product',categoryproduct)

  return (
    <>
      <Container>
        <Grid container>
          <Toaster />

          <Grid xs={3}>
            <div>
              <div className="menu--category--button">
                <select
                  aria-placeholder="Category"
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option>Select Category</option>

                  {products?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={8}>
            <ul className="navmenu--ul">
              <Link style={{ textDecoration: "none" }} to="/">
             
                <li>Home </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/">
                
                <li>
                  Category
                  <ExpandMoreIcon
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </li>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/">
                <li>About Us </li>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/">
                <li>Blog </li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/">
                <li>Contact Us </li>
              </Link>
            </ul>
          </Grid>
        </Grid>
      </Container>
    
    </>
  );
};

export default NavMenu;
