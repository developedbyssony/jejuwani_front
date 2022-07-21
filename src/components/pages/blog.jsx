import { useState, useEffect } from 'react';
import BlogList from '../blog/blogList';
import Slider4 from '../../components/slider4';
import Tab  from '../tab';

function blog({item}) {
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
          getProductItems();
          /*
          $('.post-wrapper').not('.slick-initialized').slick({
            dots:true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
          });
          */
    },[]);

    const eventKey1 = "following";
    const eventKey2 = "foryou";
    const likeCate1 = "감성 제주";
    const likeCate2 = "가족과 제주";
    const likeCate3 = "익사이팅 제주";
    const likeCate4 = "힐링 제주";
    const likeCate5 = "찐맛 제주";
    const likeCate6 = "내추럴 제주";

        return (
            <div className="container-fluid">
               <div className="row">
                    <div className="col-12">
                        <div className="section">
                            <div className="my-following-section">
                            <p className="text-style-18" id="blog-sub-tit">오늘의 핫한 와너들</p>
                            <h1 className="page-tit" id="main-tit">7월의 베스트 Wanner</h1>
                            <Slider4 data={ProductData}></Slider4>
                            <Slider4 data={ProductData}></Slider4>
                            {/*<div className="post-slider">
                            <div className="post-wrapper">
                                    <div className="post"><BlogUnits /></div>
                                    <div className="post"><BlogUnits /></div>
                                    <div className="post"><BlogUnits /></div>
                                    <div className="post"><BlogUnits /></div>
                                    <div className="post"><BlogUnits /></div>
                            </div>
                            <div id="pager">
                                <div className="prev">
                                </div>
                                <div className="next">
                                </div>
                            </div>
                            </div>*/}
                            <div className="following-post">
                            <Tab 
                                eventKey1={eventKey1}
                                eventKey2={eventKey2}
                                tapTitle1={likeCate1}
                                tapTitle2={likeCate2}
                                tapTitle3={likeCate3}
                                tapTitle4={likeCate4}
                                tapTitle5={likeCate5}
                                tapTitle6={likeCate6}
                                contents1={<BlogList />}
                                contents2={<BlogList />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )}
                            
export default blog;