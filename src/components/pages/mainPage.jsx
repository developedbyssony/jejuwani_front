import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Slider1 from '../slider1';
import Slider2 from '../slider2';
import Slider3 from '../slider3';
import Slider5 from '../slider5';
import Rating from '../star-rating/rating';
import '../../css/main.css';
import YoutubeFooter from '../youtubeFooter';
import Modal from '../modals/cartModal';
import LikeModal from '../modals/likeModal';

function main({store})  {
    /*                           
    localStorage.getItem('authId');
    */

    const onToggle = (event) => {
        let classList = event.target.classList.length;
        if(classList === 1) {
          let heartNum = event.target.classList.add('isActive');
          setLikeModalOpen(!likeModalOpen);
        } else {
          let heartNum = event.target.classList.remove('isActive');
        }
      }

    /* 장바구니 모달 */
    const [ modalOpen, setModalOpen] = useState();
    const [ modalOpenD, setModalOpenD] = useState();

    /* 라이크 모달 */
    const [ likeModalOpen, setLikeModalOpen] = useState(false);

    const setCart = () => {
        setModalOpenD(!modalOpenD);
    }

    const modalClose = () => {
        setModalOpenD(!modalOpenD);
      }

    const likeModalClose = () => {
        setLikeModalOpen(!likeModalOpen);
    }

    let [ ProductData, setProductItems ] = useState([]); 
    let [ RestaurantData, setRestaurantItems ] = useState([]); 
    let [ BlogData, setBlogData ] = useState([]); 

    async function getProductItems() {
        try {
            const response =  await fetch(
                "http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr&category=c1&title=레저&title=액티비티&title=어트랙션&title=체험&title=포토&title=투어&title=카약&title=수상&title=키즈&title=어트랙션&title=다이빙&title=스쿠버&title=어린이&title=테마&title=승마&title=물놀이&title=실내&title=아이&title=요트&title=행글&title=실외",
                {
                    method: "GET",
                });

            if(response.ok) {
                console.log('ok');
                const data = await response.json();
                const arr = data.items.slice(0,99);
                const init = arr.map((it,idx) => {
                  return {
                    "id": idx+1,
                    "title": it.title,
                    "region": it.address,
                    "introduction":it.introduction,
                    "tag": it.tag,
                    "phone": it.phoneno,
                    "price": Math.floor((Math.random()* (10000 - 3000 + 1) + 3000) / 10) * 100,
                    "hit": Math.floor(Math.random()*10000),
                    "like":Math.floor(Math.random()*100),
                    "review": 0,
                    "rating": Math.floor(Math.random() * 5),
                    "region1" : it.region1cd,
                    "region2" : it.region2cd,
                    "tag" : it.alltag,
                    "imgSrc" : it.repPhoto.photoid.imgpath,
                    }
                })
                setProductItems(init);
                return ProductData;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    
    async function getRestaurantItems() {
        try {
            const response =  await fetch(
                "http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr&category=c4",
                {
                    method: "GET",
                });
            if(response.ok) {
                console.log('ok');
                const data = await response.json();
                const arr = data.items.slice(0,99);
                const init = arr.map((it,idx) => {
                  return {
                    "id": idx+1,
                    "title": it.title,
                    "region": it.address,
                    "tag": it.alltag,
                    "regdate": it.phoneno,
                    "hit": Math.floor(Math.random()*10000),
                    "like":Math.floor(Math.random()*100),
                    "review": 0,
                    "rating": Math.floor(Math.random() * 5),
                    "latitude" : it.latitude,
                    "longitude" : it.longitude,
                    "region1" : it.region1cd,
                    "region2" : it.region2cd,
                    "imgSrc" : it.repPhoto.photoid.imgpath,
                    }
                })
                setRestaurantItems(init);
                return RestaurantData;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    async function getBlogItems() {
        try {
            const response =  await fetch(
                "http://localhost:3000/dummy/MainBlogData.json",
                {
                    method: "GET",
                });
            if(response.ok) {
                console.log('ok');
                const data = await response.json();
                console.log(data);
                setBlogData(data);
                return BlogData;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getRestaurantItems();
        getProductItems();
        getBlogItems();
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
                    <Link to="/activity"><div className="more">더 보기<h1 className="ic-more"></h1></div></Link>
                <div className="section-main-activity-contentsDisplayArea">
                </div>
                            <Slider2 data={ProductData} closeCart={modalClose} closeLike={likeModalClose} setCart={setCart} reverse={onToggle}></Slider2>
                            <Slider2 data={ProductData} closeCart={modalClose} closeLike={likeModalClose} setCart={setCart} reverse={onToggle}></Slider2>
                            { modalOpenD && <Modal modalClose={modalClose} store={store} /> }
                            { likeModalOpen && <LikeModal modalClose={likeModalClose} store={store} /> }
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
                <Link to="/restaurant"><div className="more">더 보기<h1 className="ic-more"></h1></div></Link>

                <div className="section-main-activity-contentsDisplayArea">
                </div>
                            <Slider5 data={RestaurantData} reverse={onToggle}></Slider5>
                            <Slider5 data={RestaurantData} reverse={onToggle}></Slider5>

                </div>
                </div>

                <div className="section-main-search2">
                </div>

                <div className='wrapper-main'> 
                <div className="section-main-restaurant">
                <div className="section-main-restaurant-tit">
                    <p className="text-style-18" id="main-sub-tit">리뷰가 인정한 제주도 최고 맛집</p>
                    <h1 className="page-tit" id="main-tit">7월의 베스트 Wanner</h1>
                </div>
                <Link to="/blog"><div className="more">더 보기<h1 className="ic-more"></h1></div></Link>

                <div className="section-main-activity-contentsDisplayArea">
                            <Slider3 data={BlogData}></Slider3>
                            <Slider3 data={BlogData}></Slider3>
                </div>
                </div>
                </div>
    </div>
    <YoutubeFooter />
    </>
        )
}

export default main;