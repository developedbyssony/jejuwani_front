import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  /*
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
*/
		
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        <div className="bottom-slider-container">
            <h3>1</h3>
          </div>
          <div className="bottom-slider-container">
            <h3>2</h3>
          </div>
          <div className="bottom-slider-container">
            <h3>3</h3>
          </div>
          <div className="bottom-slider-container">
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    );
  }
}