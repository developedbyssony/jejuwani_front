import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { urlToHttpOptions } from 'url';
import '../css/checkout-card.css';
import '../css/order-form.css';
import '../css/product-detail.css';
import Modal from './modals/cartModal.jsx';
import ModalD from './modals/deleteModal.jsx';
import ProductNavBar from './productDetailNavBar';
import Rating from './star-rating/rating';


function productShow({serverURL,product_info,review}) {
    const amount = useRef();
    useEffect(() => {
        console.log(product_info.post);
        console.log(review);
      },[]);

    let [ cartState, setCart ] = useState([]);
    let [ heart, setheart ] = useState([false]);
    let [ modalOpen, setModalOpen] = useState(false);
    let [ modalOpenD, setModalOpenD] = useState(false);
    let [ product, setProduct ] = useState(
        {
           product_id: product_info.post.id, // 고유번호
           category: '1', // 액티비티인지, 레스토랑인지 분류
           title: product_info.post.title, // 프로덕트(게시글) 이름
           region: '2', // 주소가 속한 지역
           rating: product_info.post.rating, // 별점 평균
           review : product_info.post.review.length || 0, // 총 리뷰의 갯수
           setHeart : heart, // 유저가 like를 눌렀는가? (bool) -> like 눌렀을 시 유저 아이디에 제품 정보 save
           address : product_info.post.region,
           hit : product_info.post.hit,
           likes : product_info.post.like, // 제품이 총 like를 받은 수 (숫자)
           price: product_info.post.price,
           imgSrc : product_info.post.imgSrc,
           max_capacity : '0', // 주문수, 디폴트는 0
           content :  product_info.post.introduction,
           tag: product_info.post.tag,
           label:product_info.post.region1.label,
        })

    let [ like, setlike ] = useState(product.likes);
    let [ price, setPrice ] = useState(product.price);

    const onClickHeart = e => {
        const { count, value } = e.target;
        setProduct({...product, [count]:value});
    }

    const setAmount = () => {
        const arr = { ...product, price: product_info.post.price * amount.current.value };
        setProduct(arr);
        setPrice(price * amount.current.value);
    }

    const ontoggle = () => {
        if(heart === false) {
            const arr = { ...product, likes: product.likes - 1 };
            setProduct(arr);
            setheart(!heart);
            console.log(product.likes);
        } else {
            const arr = { ...product, likes: product.likes + 1 };
            setProduct(arr);
            setheart(!heart);
            //setProduct({product : product.map(k => k.id === id ? {...k, likes: k.likes - 1} : k)});
            console.log(product.likes);
        }
    }

   const modalClose = () => {
      setModalOpen(!modalOpen);
      localStorage.setItem('cartState',JSON.stringify(cartState));
    }

    const modalCloseD = () => {
        setModalOpenD(!modalOpenD);
      }

    return(
    <div>
    <div className="conatiner-fluid">
    <div className="productShow">
        <div className="product-overview">
        <div className="section" id="product-show-sec">
        <div className="row">
            <div className="col-5">
            <div className="product-img-detail-activity">
                <img src={product.imgSrc} alt="액티비티이미지" id="img-activity" style={{width:'670px', height:'670px', objectFit:'cover'}}/>
            </div>
            </div>
        </div>
        <div className="col-1">
        </div>
        <div className="col-6">
        <div class="product-info">
            <header className="product-info-header">
            <a className="tag" href="/">{
                product.category === '1'
                &&
                <a className="tag">Activity</a>
            }</a>
            <h1 claassName="info-tit" id="info-tit">{product.title}</h1>
            <div className="info-review">
                <Rating rating={product.rating}></Rating>
                <p>
                <strong>{product.review}</strong>
                <span>개 리뷰</span>
            </p>
            </div>
            </header>
            
            <div className="product-info-top">
            <div className="price-20">
                <strong className="amount">{product_info.post.price.toLocaleString()}</strong>
                <span className="currency-product-show">원</span>
            </div>
            <strong className="tag-orange">특가</strong>
            </div>

            <div className="product-info-bottom">
                <div className="product-info-like">
                <div className="product-like">
                <h1 className={heart ? 'heartNotActive' : 'heartActive'} onClick={ontoggle}></h1>
                <span>{product.likes}</span>
                </div>
                <div className="product-info-address">
                <div className="address">
                <p className="text-sytle-13">{product.address}</p>
                <p className="tag-outline">{product.label}</p> 
                <div> 
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        <form className="order-formz" action="/" method="POST">
                <div className="order-inputz">
                    <div className="select-group is-active" id="order-inputs">
                    <select ref={amount} onChange={setAmount} className="form-select" id="mandatory-select" required>
                    <option value="0">선택수량</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    </div>
                </div>
                <div className="order-inputz">
                    <div className="select-group is-active" id="order-inputs">
                    <select className="form-select" id="mandatory-select" required>
                    <option value="0">예약날짜</option>
                    <option value="1">2022-07-05</option>
                    <option value="2">2022-07-06</option>
                    <option value="3">2022-07-07</option>
                    <option value="4">2022-07-08</option>
                    <option value="5">2022-07-09</option>
                    </select>
                    </div>
                </div>

                <dl className="order-summary">
                    <dt>주문금액</dt>
                    <dd>
                        <output for="mandatory-select">
                            <div className="price-20">
                            <strong className="amount">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>
                            <span className="currency-product-show">원</span>
                            </div>
                        </output>
                    </dd>
                </dl>
                <div className="button-group">
                    <Link to="/cart">
                    <button className="btn-outlined btn-55" type="button" onClick={modalClose} id="firstBtn">
                        장바구니
                    </button>
                    </Link>
                    <div className="margin-right"></div>
                    <Link to="/order">
                    <button className="btn-primary btn-55" type="button">
                        바로구매
                    </button>
                    </Link>
                </div>
        </form>
        </div>
        </div>
        </div>
    </div>
    <ProductNavBar product={product} review={review}/>
    </div>
    </div>
    );
}

export default productShow;