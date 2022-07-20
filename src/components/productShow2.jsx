import React, { useState } from 'react';
import '../css/checkout-card.css';
import '../css/order-form.css';
import '../css/product-detail.css';
import ProductNavBar from './productDetailNavBar';
import KakaoMapRestaurant from '../service/kakaoMapRestaurant.js';


function productShow2() {
    let [ like, setlike ] = useState(0);
    let [ heart, setheart ] = useState([false]);
    let [ product, setProduct ] = useState(
        {
           product_id: 1, // 고유번호
           category: '2', // 액티비티인지, 레스토랑인지 분류
           title: '로컬이 뽑은 현지 맛집, 고등어회로 유명한 만선 식당', // 프로덕트(게시글) 이름
           region: '2', // 주소가 속한 지역
           // price: '20000', // 제품 1개의 가격 
           // max_capacity : '0', // 주문수, 디폴트는 0
           review : '3', // 총 리뷰의 갯수
           setHeart : heart, // 유저가 like를 눌렀는가? (bool) -> like 눌렀을 시 유저 아이디에 제품 정보 save
           islikeLength : like, // 제품이 총 like를 받은 수 (숫자)
           address : '제주특별자치도 서귀포시 대정읍 하모항구로 44', // 액티비티할 수 있는 주소
           content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quo dolore aliquid cupiditate iure magnam saepe ratione cum est voluptas, exercitationem explicabo, eum incidunt iusto nemo veniam quidem amet praesentium?'
        })

    function ontoggle() {
        if(heart === false) {
            setlike(like-1);
            setheart(!heart);
        } else {
            setlike(like+1);
            setheart(!heart);
        }
    }
    return(
    <div className="conatiner-fluid">
    <div className="productShow">
        <div className="product-overview">
        <div className="row">
            <div className="col-5">
            <section class="product-img-detail">
            </section>
            </div>
        </div>
        <div className="col-1">
        </div>
        <div className="col-6">
        <div class="product-info">
            <header className="product-info-header">
            <a className="tag" href="/">{
                product.category === '2'
                &&
                <a className="tag">Restaurant</a>
            }</a>
            <h1 claassName="info-tit" id="info-tit">{product.title}</h1>
            <div className="info-review">
                <div className="star-rating-13">
                    <i className="ic-star is-active"></i>
                    <i className="ic-star is-active"></i>
                    <i className="ic-star is-active"></i>
                    <i className="ic-star is-active"></i>
                    <i className="ic-star is-active"></i>
                </div>
                <p>
                <strong>{product.review}</strong>
                <span>개 리뷰</span>
            </p>
            </div>
            </header>

            <div className="product-info-bottom">
                <div className="product-info-like">
                <div className="product-like">
                <h1 className={heart ? 'heartNotActive' : 'heartActive'} onClick={ontoggle}></h1>
                <span>{like}</span>
                </div>
                <div className="product-info-address">
                <div className="address">
                <p className="text-sytle-13">{product.address}</p>
                <p className="tag-outline">{
                product.region === '2'
                &&
                '서귀포시'
                }</p>
                </div>
                </div>
                </div>
            </div>
            <KakaoMapRestaurant />
        </div>
        </div>
        </div>
        </div>
        <ProductNavBar />
    </div>
    );
}

export default productShow2;