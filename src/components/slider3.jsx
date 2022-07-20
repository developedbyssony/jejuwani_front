import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        <div className="blog-slider-container">
            <h3>1</h3>
          </div>
          <div className="blog-slider-container">
            <h3>2</h3>
          </div>
          <div className="blog-slider-container">
            <h3>3</h3>
          </div>
          <div className="blog-slider-container">
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    );
  }
}