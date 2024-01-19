import React from "react";
import Slider from "react-slick";
import CardProduct from "./CardProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

export default function SwiperCard() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };
  return (
    <Container>
        <div className="swiper--container">
    {/* <Slider {...settings}>
     
      <div>
       <CardProduct/>
      
      </div>
   
    </Slider> */}
 <CardProduct/>
    </div>

    </Container>
  );
}