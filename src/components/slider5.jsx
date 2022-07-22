import React from "react";
import Slider from "react-slick";
import ProductUnit from './cardUI/productUnitRestaurantMap';
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import NextArrow from './slider/nextArrow';


const StyledSlider = styled(Slider)`
  margin-bottom: 80px;
    .slider {
      display:flex;
      justify-contents:center;
      position:relative;
      height: 45vh;
      margin-bottom:100px;
      margin-left:-50px;
    }
`;

export default function SimpleSlider({map}) {
    const settings = {
      dots: false,
      centerMode:true,
      centerPadding:'5px',
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
              <ProductUnit map={map}/>
        </div>
        <div className="slider">
              <ProductUnit map={map}/>
        </div>
        <div className="slider">
              <ProductUnit map={map}/>
        </div>
        <div className="slider">
              <ProductUnit map={map}/>
        </div>
        <div className="slider">
              <ProductUnit map={map}/>
        </div>
        <div className="slider">
              <ProductUnit map={map}/>
        </div>
        </StyledSlider>
      </div>
    );
  }
