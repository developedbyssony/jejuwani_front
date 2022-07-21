import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/checkout-card.css';
import '../css/order-form.css';
import Modal from './modals/cartModal.jsx';
import ModalD from './modals/deleteModal.jsx';
import ProductNavBar from './productDetailNavBar';


function productShow() {
    // localStorage를 체크 > 값이 있으면 > 그걸 초기값!
    let [ cartState, setCart ] = useState([]);
    let [ like, setlike ] = useState(0);
    let [ heart, setheart ] = useState([false]);
    let [ modalOpen, setModalOpen] = useState(false);
    let [ modalOpenD, setModalOpenD] = useState(false);
    let [ product, setProduct ] = useState(
        {
           product_id: 1, // 고유번호
           category: '1', // 액티비티인지, 레스토랑인지 분류
           title: '이호테우해변대표 서핑샵! 서프로와 서핑 강습', // 프로덕트(게시글) 이름
           region: '2', // 주소가 속한 지역
           price: '20000', // 제품 1개의 가격 
           max_capacity : '0', // 주문수, 디폴트는 0
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
                product.category === '1'
                &&
                <a className="tag">Activity</a>
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
            
            <div className="product-info-top">
            <div className="price-20">
                <strong className="amount">{product.price}</strong>
                <span className="currency">원</span>
            </div>
            <strong className="tag-orange">특가</strong>
            </div>

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
        </div>
        <form className="order-form" action="/" method="POST">
                <div className="order-inputs">
                    <div className="select-group is-active" id="order-inputs">
                    <select className="form-select" id="mandatory-select" required>
                    <option value="">선택수량</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    </div>
                </div>

                <div className="order-inputs">
                    <div className="select-group is-active" id="order-inputs">
                    <select className="form-select" id="mandatory-select" required>
                    <option value="">예약날짜</option>
                    <option value="1">2022-07-05</option>
                    <option value="2">2022-07-06</option>
                    <option value="3">2022-07-07</option>
                    <option value="4">2022-07-08</option>
                    <option value="5">2022-07-09</option>
                    </select>
                    </div>
                </div>

                <div className="order-checkouts">
                <ul className="checkout-list">
                    <li className="checkout-item">
                        <div className="checkout-card">
                            <header className="checkout-header">
                                <div classNmae="checkout-title">
                                2명
                                </div>
                                <button 
                                    className="delete-button" 
                                    type="button" 
                                    aria-label="해당 상품을 삭제하기">
                                <i className="ic-close" onClick={modalCloseD}></i>
                                {
                                modalOpenD && <ModalD
                                modalClose={modalCloseD}
                                productId={product.product_id}
                                />
                                }
                                </button>
                            </header>

                            <footer className="checkout-footer">
                            <div className="checkout-select">
                                <select id="checkout-item">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <i className="ic-caret" aria-hidden></i>
                            </div>
                            <output className="checkout-output" for="checkout-item">
                             <div className="price-16">
                                <strong className="amount">0</strong>
                                <span className="currency">원</span>
                            </div>
                            </output>
                            </footer>
                        </div>
                    </li>
                </ul>
                </div>


                <dl className="order-summary">
                    <dt>주문금액</dt>
                    <dd>
                        <output for="mandatory-select">
                            <div className="price-20">
                            <strong className="amount">0</strong>
                            <span className="currency">원</span>
                            </div>
                        </output>
                    </dd>
                </dl>
                <div className="button-group">
                    <button className="btn-outlined btn-55" type="button" onClick={modalClose}>장바구니</button>
                    {
                        modalOpen && <Modal
                        modalClose={modalClose}
                        cartState={cartState}
                        />
                    }
                    <button className="btn-primary btn-55" type="button">
                    <Link to="/order">
                        바로구매
                    </Link>
                    </button>
                </div>
        </form>
        </div>
        </div>
        </div>
    </div>
    <ProductNavBar />
    </div>
    );
}

export default productShow;