import { useEffect } from "react";
import Slider from "react-slick";
import ProductUnit from './cardUI/productUnitBlog';
import "../css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import NextArrow from './slider/nextArrow';


const StyledSlider = styled(Slider)`
width:100%;
height:500px;
overflow:hidden;
margin-bottom:30px;
`;

export default function SimpleSlider({data}) {
  
const settings = {
  slide:"frame",
  infinite: true,
  speed: 500,
  slidesToScroll: 6,
  slidesToShow: 6,
  nextArrow: <NextArrow />,
  swipeToSlide: true,
  responsive: [ // 반응형 웹 구현 옵션
  {  
    breakpoint: 1024, 
    settings: {
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:3,
      slidesToScroll: 1
    } 
  },
  {  
    breakpoint: 960, //화면 사이즈 960px
    settings: {
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:2,
      slidesToScroll: 1
    } 
  },
  { 
    breakpoint: 768, //화면 사이즈 768px
    settings: {	
      //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
      slidesToShow:1,
      slidesToScroll: 1
    } 
  }]};
    return (
      <div className="blog-page-units">
        <StyledSlider {...settings}>
        {data.map((d) => (<ProductUnit item={d} />))}
        </StyledSlider>
      </div>
    );
  }
