import React, { useState, useEffect } from 'react';
import KakaoMapScript from '../../service/kakaoMapScript';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import '../../css/rentalCollapse.css';
import '../../css/navi.css';
import TransportaitonInfoUnit from '../cardUI/transportationInfoUnit';
import DatePickerComponent from '../DatePickerComponent';
import Slider5 from '../slider5';

export default function navigation() {
    async function getInjuries() {
        try {
            const response =  await fetch(
                "https://open.jejudatahub.net/api/proxy/36333aD6tba8aa1D6D1aaab8D1aa6ba8/10e1t11j4jte041bt14p1tporp1b106t?sidoSigungu=제주시",
                {
                    method: "GET",
                });
            if(response.ok) {
                console.log('ok');
                const data = await response.json();
                console.log(data);
                const init = data.data.map((it,idx) => {
                  return {
                    "id": idx+1,
                    "sidoSigungu": it.sidoSigungu,
                    "place": it.occurrencePlace,
                    "occurrenceCount":it.occurrenceCount,
                    "bjdCode": it.bjdCode,
                    "latitude" : it.latitude,
                    "longitude" : it.longitude,
                    }
                })
                setInjuries([...init,injury]);
                console.log(init);
                return init;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }
    /*
    async function getRentCarData() {
        try {
            const response =  await fetch(
                "http://localhost:5373/dummy/rentcar.json",
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
                    "car": it.VHCLE_NM,
                    "category": it.VHCLE_TY_NM,
                    "useTime":it.USE_TIME_CO
                    }
                })
                setRentCarData([...init,rentCar]);
                console.log(init);
                return init;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }*/
    
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
          getInjuries();
          getInjuries();
    },[])
    const width = 560;
    const [ search, searchStart] = useState(false);
    const [ inputText, setInputText ] = useState('');
    const [ place, setPlace ] = useState('');
    const [ injury, setInjuries ] = useState([]);
    const [ rentCar, setRentCarData ] = useState([]);

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlace(inputText);
        setInputText("");
    }

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
                    <div className="section">
                        <p>{injury.map((it) => 
                        <p>{it.place}  {it.occurrenceCount}</p>)}</p>
                    </div>        
                    <div className="section">
                        <p>{rentCar.map((it) => 
                        <p>{it.car}  {it.useTime}</p>)}</p>
                    </div>
                    </>
                    /*
                        <div className="section">
                            <h1 className="page-tit">제주도 교통 A to Z</h1>
                            <div className="section-main-activity-sorting">
                        <div className="main-sort-row1">
                     <button className="btn-sort btn-s40">렌트카</button>
                     <button className="btn-sort btn-s40">자전거</button>                               
                     <button className="btn-sort btn-s40">보행</button>
                      </div>
                            </div>

                            </div>
                            </div>
                            {/*
                            <div className="d-flex flex-column" style={{outline: 0}}>
                <Button id="toggle">
                    <h1 className="page-tit" id="rentalCarCTA">어떤 렌트카 찾으세요?</h1>
                </Button>
                        <UncontrolledCollapse toggler="#toggle" className="m-0 p-0">
                            <Card className="collapseCard">
                                <CardBody className="collapseCardBody">
                        <div className="rentalCars">
                        </div>
                            <div className="section-main-activity-sorting">
                            <div className="navi-sort-btn-row">
                                <div className="rental-sort">
                                <button className="btn-sort btn-s40">경차</button>
                                <button className="btn-sort btn-s40">준중형</button>
                                <button className="btn-sort btn-s40">SUV</button>
                                <button className="btn-sort btn-s40">고급</button>
                                </div>
                                <div className="rental-datepicker">
                                <DatePickerComponent />
                                </div>
                            </div>
                            </div>
                            <div className="rentalCarContentsDisplay">
                            <div className="rentalCarFilter"> 
                                <ul className="rentalCarFilterUl">
                                    <h1 className="page-tit" id="smart-filter">스마트 필터</h1>
                                    <li><span className="signup-tit1">보험</span></li>
                                    <li><span className="signup-tit1">연료</span></li>
                                    <li><span className="signup-tit1">연식</span></li>
                                    <li><span className="signup-tit1">평점</span></li>
                                </ul>
                            </div>
                            <div className="rentalCarList">
                            </div>
                            </div>
                        </CardBody>
                        </Card>
                    </UncontrolledCollapse>*/
        );
    }