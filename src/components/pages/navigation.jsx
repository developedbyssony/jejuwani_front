import { useState, useEffect } from 'react';
import KakaoMapScript from '../../service/kakaoMapScript';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import '../../css/rentalCollapse.css';
import '../../css/navi.css';
import TransportaitonInfoUnit from '../cardUI/transportationInfoUnit';
import Slider5 from '../slider5';
import Barchart from '../barchart';
import '../../css/d3.css';
import KakaoMapRestaurant from '../../service/kakaoMapRestaurant.js';

export default function navigation() {
    async function getRentCarData() {
        try {
            const response =  await fetch(
                "http://localhost:3000/dummy/rentcar2021img.json",
                {
                    method: "GET",
                });
            if(response.ok) {
                console.log('ok');
                const data = await response.text();
                const dd = JSON.parse(data);
                console.log(dd);
                const init = dd.map((it,idx) => {
                  return {
                    "id": idx+1,
                    "img": it.imgSrc
                    }
                })
                setRentCarData([...init,dataImg]);
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    async function popularLandMark() {
        try {
            const response =  await fetch(
                "http://localhost:3000/dummy/popularList.json",
                {
                    method: "GET",
                });
            if(response.ok) {
                console.log('ok');
                const data = await response.json();
                console.log(data);
                const init = data.map((it,idx) => {
                  return {
                    "id": idx+1,
                    "title": it.title,
                    "address": it.address,
                    "category":it.category,
                    "searchNum": it.searchNum,
                    }
                })
                setList([...init,popList]);
                return;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        $('.post-wrapper').not('.slick-initialized').slick({
            dots:true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
          });
          getRentCarData();
          getInjuries();
          popularLandMark();
    },[])
    const width = 560;
    const [ search, searchStart] = useState(false);
    const [ inputText, setInputText ] = useState('');
    const [ place, setPlace ] = useState('');
    const [ injury, setInjuries ] = useState([]);
    const [ dataImg, setRentCarData ] = useState([]);
    const [ popList, setList ] = useState([]);

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");

        return (
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="section">
                            <h1 className="page-tit">제주도 지역별 추천 명소 키워드 검색</h1>
                            <div class="map-group">
                            <KakaoMapScript searchPlace={place} width={width} />
                            <div className="map-contents">
                            <div className="search-tag">
                            <p className="tag-orange">#사려니숲길</p>
                            <p className="tag-orange">#제주불빛정원</p>
                            <p className="tag-orange">#애월항</p>
                            <p className="tag-orange">#한담해안산책로</p>
                            <p className="tag-orange">#아르떼뮤지엄</p>
                            </div>
                            <div className="keyword-search" id="keyword-search">
                            <div>
                                <form className="input-group" 
                                onSubmit={handleSubmit}>
                                <input 
                                class="form-input" 
                                type="text"
                                id="keyword"
                                placeholder="키워드 검색"
                                onChange={onChange}
                                />
                                <button type="submit"><div class="ic-search"></div></button>
                                </form>
                            </div>
                                <ul id="placesList">
                                <div className="default-sec-search">
                                    <p className="text-style-13" id="search-inner-txt">검색어를 입력해주세요</p>
                                </div>
                                { search  &&  <div id="pagination"></div> }
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="section section-navi">
                            <div className="section-main-activity-sorting">
                            <h1 className="page-tit" id="navi-hotPlace">제주도 핫플레이스 TOP 100</h1>
                     <div className="pop-box">
                        <div className="pop-header">
                            <ul className="popList" id="pop-header">
                            <li>순위</li>
                            <li className="header-title" id="pop-title">장소</li>
                            <li className="header-address" id="pop-address">주소</li>
                            <li id="pop-search">검색수</li>
                            </ul>
                            </div>
                     <p>{popList.slice(0,100).map((it) => (
                                    <ul className="popList">
                                    {/*<KakaoMapRestaurant latitude={it.latitude} longitude={it.longitude} title={it.place}/> */}
                                    <li><p>{it.id}</p></li>
                                    <li id="pop-title"><p><strong>{it.title}</strong></p></li>
                                    <li id="pop-address"><p>{it.address}</p></li>
                                    <li id="pop-search"><p>{it.searchNum}</p></li>
                                    </ul>
                                    ))}</p></div>
                            </div>
                        <div className="chart">
                        <Barchart dataImg={dataImg}></Barchart>
                        </div>
                    </div> 
                    </>
                    )}
                     }