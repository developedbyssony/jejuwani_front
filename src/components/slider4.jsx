import React from "react";
import Slider from "react-slick";
import ProductUnit from './cardUI/productUnitBlog';
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import NextArrow from './slider/nextArrow';


const StyledSlider = styled(Slider)`
  margin-bottom: 0px;
    .slider {
      display:flex;
      justify-contents:center;
      position:relative;
      height: 30vh;
      margin-bottom:20px;
      margin-left:-50px;
    }
`;

export default function SimpleSlider({data}) {
    const settings = {
      dots: false,
      centerMode:true,
      centerPadding:'60px',
      infinite: true,
      speed: 500,
      nextArrow: <NextArrow />,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div>
        <StyledSlider {...settings}>
        <div className="slider">
              <ProductUnit item={data} />
        </div>
        <div className="slider">
              <ProductUnit item={data} />
        </div>
        <div className="slider">
              <ProductUnit item={data} />
        </div>
        <div className="slider">
              <ProductUnit item={data} />
        </div>
        <div className="slider">
              <ProductUnit item={data} />
        </div>
        <div className="slider">
              <ProductUnit item={data} />
        </div>
        </StyledSlider>
      </div>
    );
  }
