import React, { useContext } from 'react'
import CardProduct from '../../CardProduct/CardProduct'
import { Container } from "@mui/material";

import proudimg from "../../../images/one.png";
import "../../CardProduct/CardProduct.css";
import Rating from "@mui/material/Rating";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";
import { ProductContext } from '../../Context/Context';
import Navbar from '../../../Global/Navbar/Navbar';

const Searchedpage = ({categoryproduct}) => {
  const {searchProduct,fetchProductById} = useContext(ProductContext)
  const handleClickPrdouct =(id)=>
  {
      fetchProductById(id)
      console.log(id)
  }
  console.log(searchProduct)
  return (
<>
<Navbar/>
<Container>

<div className="card--container">

       
        
            {searchProduct?.map((item) => (
              <>
                <div className="card">
                <img src={proudimg} />
                <div className="card-content">
                  <h2 className="card-title">{item.name}</h2>
                  {/* <p className="card-text">Lorem ipsum dolor sit amet</p> */}
                  <Rating
                    sx={{ padding: "3px" }}
                    name="read-only"
                    value="3"
                    readOnly
                  />
                  <div className="iconsandprice">
                    <p>$300</p>
                    <Link onClick={()=>handleClickPrdouct(item._id)} to="/productdetail">
                      <RemoveRedEyeOutlinedIcon sx={{ color: "gray" }} />
                    </Link>
                  </div>
                </div>
                </div>
              </>
            ))}
          </div>
      
    
          </Container>
</>
  )
}

export default Searchedpage