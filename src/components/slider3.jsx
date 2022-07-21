import React from "react";
import Slider from "react-slick";
import ProductUnit from './cardUI/productUnitBlog';
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const StyledSlider = styled(Slider)`
     position:relative;
     left:52%;

    .slick-track {
      width:0px;
    }

    .slider-inner {
      display:flex;
      justify-contents:center;
      position:relative;
      height: 30vh;
      margin-left:11%;
    }

    .slider-outter {
      display:flex;
      flex-direction:colum;
    }
`;

/*
    .box {
      position:absolute;
      display:flex;
      justify-contents:center;
      border:1px solid black;
      //width:100% - 160px, -160px
      height:100%;
    }
  */

export default function SimpleSlider({data, setCart, closeCart}) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <StyledSlider {...settings}>
        <div className="slider-outter">
              <div className="slider-inner">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
              </div>
        </div>
        <div className="slider-outter">
              <div className="slider-inner">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
              </div>
        </div>
        </StyledSlider>
      </div>
    );
  }
