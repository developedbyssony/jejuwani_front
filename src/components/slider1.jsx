import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
    .slider-container {
      border:none,
      outline: none; 
    }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      centerMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0px',
    };
    return (
      <div>
        <StyledSlider {...settings}>
          <div className="slider-container1">
          </div>
          <div className="slider-container2">
          </div>
          <div className="slider-container3">
          </div>
        </StyledSlider>
      </div>
    );
  }
}