import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slider.css";
import MainLandMark from "./slider/mainLandMark.jsx";
import MainLandMark2 from "./slider/mainLandMark2.jsx";
import MainLandMark3 from "./slider/mainLandMark3.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import NextArrow from './slider/nextArrowMain';
import PrevArrow from './slider/prevArrowMain';

const StyledSlider = styled(Slider)`
    .slider {
      border:none,
      outline: none;
      height: 30vw;
    }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      adaptiveHeight: true,
      arrows:true,
      dots: true,
      infinite: true, // 무한 반복
      centerMode: true,
      autoplay: true,
      speed:2000, // 넘어가는 속도
      slidesToShow: 1, // 1장씩 보이게
      slidesToScroll: 1, // 1장씩 뒤로 넘어가게
      centerPadding: '0px', // 0px하면 슬라이드 끝 쪽 이미지가 안 잘림
      cssEase:"linear",
      nextArrow: <NextArrow />,
      prevArrow:<PrevArrow />
    };
    return (
      <div>
        <StyledSlider {...settings}>
          <div className="slider">
          <MainLandMark />
          </div>
          <div className="slider">
          <MainLandMark2 />
          </div>
          <div className="slider">
          <MainLandMark3 />
          </div>
        </StyledSlider>
      </div>
    );
  }
}