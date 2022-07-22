import { useState, useEffect } from 'react';
import Slider1 from '../slider1';
import Slider2 from '../slider2';
import Slider3 from '../slider3';
import Slider5 from '../slider5';

import ProductUnitListActivity from '../productUnitListActivity';
import ProductUnitRestaurantMap from '../productUnitListRestaurant';
import TransportaitonInfoUnit from '../cardUI/transportationInfoUnit';
import BlogUnit from '../cardUI/productUnitBlogSpecial';
import '../../css/main.css';
import YoutubeFooter from '../youtubeFooter';
import MainBlogUnit from '../cardUI/mainBlogUnit';

function main({kakaomap})  {
    const [ modalOpen, setModalOpen] = useState();
    const modalClose = () => {
        setModalOpen(!modalOpen);
      }
    let [ ProductData, setProductItems ] = useState([]); 

    async function getProductItems() {
        try {
            const response =  await fetch(
                "http://localhost:3000/dummy/ProductData.json",
                {
                    method: "GET",
                });
            if(response.ok) {
                console.log('ok');
                const data = await response.json();
                console.log(data);
                setProductItems(...data);
                return ProductData;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        $('.center').slick({
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 2000,
          });
          $('.single-item').slick({
            infinite: true,
            slidesToShow: 1,
        })
        getProductItems();
        console.log(ProductData);
        $('.post-wrapper').not('.slick-initialized').slick({
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
          });
    },[]);
return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="main-slider1">
                            <Slider1></Slider1>
                        </div>
                <div className='wrapper-main'> 
                        <div className="section-main-activity">
                        <div className="section-main-activity-tit">
                    <p className="text-style-13" id="main-sub-tit">여행이 돌아왔어요!</p>
                    <h1 className="page-tit" id="main-tit">7월에 놓치면 후회할 제주 체험</h1>
                        </div>
                        <div className="section-main-activity-sorting">
                    <div className="main-sort-row1">
                    <button className="btn-sort btn-s40">수상 액티비티</button>
                    <button className="btn-sort btn-s40">가이드 투어</button>
                    <button className="btn-sort btn-s40">농어촌 체험</button>
                    <button className="btn-sort btn-s40">스파/힐링</button> 
                    </div>
                    <div className="main-sort-row2">
                    <button className="btn-sort btn-s40">입장권</button>
                    <button className="btn-sort btn-s40">키즈</button>
                    <button className="btn-sort btn-s40">클래스</button>
                    <button className="btn-sort btn-s40">스냅촬영</button>
                    </div>
                    </div>
                 <div className="more">더 보기<h1 className="ic-more"></h1></div>
                <div className="section-main-activity-contentsDisplayArea">
                            <Slider2 data={ProductData} setCart={modalOpen} closeCart={modalClose}></Slider2>
                            <Slider2 data={ProductData} setCart={modalOpen} closeCart={modalClose}></Slider2>
                </div>
                </div>
                </div>
                        <div className="section-main-search">
                            <div className="section-main-search-input-group">
                            <form className="input-group" id="main-search-input">
                                <input class="form-input" type="text" placeholder="월정리 투명카약" />
                                <button type="submit"><div class="ic-search"></div></button>
                            </form>
                            <div className="section-main-search-tit">
                            <p className="text-style-13" id="main-search-tit">지금 바로 떠나보세요!</p>
                            </div>
                            </div>
                        </div>
                </div>
                </div>

                <div className='wrapper-main'> 
                <div className="section-main-restaurant">
                <div className="section-main-restaurant-tit">
                    <p className="text-style-18" id="main-sub-tit">리뷰가 인정한 제주도 최고 맛집</p>
                    <h1 className="page-tit" id="main-tit">맛있고 특별한 제주 여행을 즐겨보세요!</h1>
                </div>
                <div className="more">더 보기<h1 className="ic-more"></h1></div>

                <div className="section-main-activity-contentsDisplayArea">
                            <Slider5 map={kakaomap}></Slider5>
                            <Slider5 map={kakaomap}></Slider5>
                </div>
                </div>
                </div>

                <div className="section-main-search">
                            <div className="section-main-search-input-group">
                            <form className="input-group" id="main-search-input">
                                <input class="form-input" type="text" placeholder="월정리 투명카약" />
                                <button type="submit"><div class="ic-search"></div></button>
                            </form>
                            <div className="section-main-search-tit">
                            <p className="text-style-13" id="main-search-tit">지금 바로 떠나보세요!</p>
                            </div>
                            </div>
                </div>

                <div className='wrapper-main'> 
                <div className="section-main-restaurant">
                <div className="section-main-restaurant-tit">
                    <p className="text-style-18" id="main-sub-tit">리뷰가 인정한 제주도 최고 맛집</p>
                    <h1 className="page-tit" id="main-tit">7월의 베스트 Wanner</h1>
                </div>
                <div className="more">더 보기<h1 className="ic-more"></h1></div>

                <div className="section-main-activity-contentsDisplayArea">
                            <div className="main-blog-best-wanner">
                            <BlogUnit item={ProductData}/>
                            </div>
                            <Slider3 data={ProductData} setCart={modalOpen} closeCart={modalClose}></Slider3>
                </div>
                </div>
                </div>
    </div>
    <YoutubeFooter />
    </>
        )
}

export default main;