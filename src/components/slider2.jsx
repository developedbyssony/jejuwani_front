import React from "react";
import Slider from "react-slick";
import ProductUnit from './cardUI/productUnitActivity';
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import NextArrow from './slider/nextArrow';


const StyledSlider = styled(Slider)`
margin-right: -80px;
margin-bottom: -100px;
  .slider {
    display:flex;
    justify-contents:center;
    position:relative;
    height: 45vh;
    margin-bottom:60px;
  }
`;

export default function SimpleSlider({data, setCart, closeCart}) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      nextArrow: <NextArrow />,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <StyledSlider {...settings}>
        <div className="slider">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
        </div>
        <div className="slider">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
        </div>
        <div className="slider">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
        </div>
        <div className="slider">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
        </div>
        <div className="slider">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
        </div>
        <div className="slider">
              <ProductUnit item={data} setCart={setCart} closeCart={closeCart}/>
        </div>
        </StyledSlider>
      </div>
    );
  }
