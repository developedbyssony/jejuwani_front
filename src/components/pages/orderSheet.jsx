import CartCount from 'components/cart/CartCount';
import { useState, useRef } from 'react';
import '../../css/order.css';
import Input from '../tinyForm/input';

function orderSheet() {
    /*
    const rbuyer_email = useRef();
    const rbuyer_name = useRef();
    const rbuyer_tel = useRef();
    const rbuyer_addr = useRef();
    const rbuyer_postcode = useRef();

    const [ orderState, setOrderState ] = [{
        pg : 'html5_inicis',
        pay_method : rpay_method.current.value,
        merchant_uid: 'ddd',
        name: 'ddd',
        amount:{amount},
        buyer_email: rbuyer_email.current.value,
        buyer_name: rbuyer_name.current.value,
        buyer_tel: rbuyer_tel.current.value,
        buyer_addr: rbuyer_addr.current.value,
        buyer_postcode: rbuyer_postcode.current.value,
    }]
    */
    function payment(e) {
    e.preventDefault();   
    const { IMP } = window; 
    IMP.init('imp23066347'); 
    IMP.request_pay({
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 64900,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181"
    }, rsp => { 
        if (rsp.success) {
          // jQuery로 HTTP 요청
        jQuery.ajax({
            url: "{서버의 결제 정보를 받는 endpoint}", // 예: https://www.myservice.com/payments/complete
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: {
                imp_uid: rsp.imp_uid,
                merchant_uid: rsp.merchant_uid
            }
        }).done(function (data) {
            console.log("API 연결");
        })
      } else {
            alert("결제에 실패하였습니다. 에러 내용: " +  rsp.error_msg);
      }
    })}
        return (
            <div className="container-fluid">
            <div className="row">
                 <div className="col-12">
                     <div className="section">
                     <div className="container">
                        <div className="cart-top-sec">
                        <div className="bread-scrum">
                            <ul>
                             <li>
                                장바구니<i className="ic-chevron"></i>
                            </li>
                            <li>
                            <strong>주문/결제</strong><i className="ic-chevron"></i>
                            </li>
                            <li>
                                완료
                            </li>
                            </ul>
                        </div>
                        <h1 className="page-tit">주문/결제</h1>
                        <ul className="likeUnitwrapper">
                            <li className="table-th">
                                <div className="heading">
                                <div class="cell">
                                <span className="currency">상품번호</span>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <span className="currency">상품정보</span>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <span className="currency">수량</span>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <span className="currency">상품금액</span>
                                </div>
                                </div>
                            </li>
                            <li className="table-row">
                                <div className="heading">
                                <div class="cell">
                                <p>상품 번호</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>상품 이름</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>1개</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>5,8000원</p>
                                </div>
                                </div>
                            </li>
                            <li className="table-row">
                                <div className="heading">
                                <div class="cell">
                                <p>상품 번호</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>상품 이름</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>1개</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>5,8000원</p>
                                </div>
                                </div>
                            </li>
                            <li className="table-row">
                                <div className="heading">
                                <div class="cell">
                                <p>상품 번호</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>상품 이름</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>1개</p>
                                </div>
                                </div>
                                <div className="heading">
                                <div class="cell">
                                <p>5,8000원</p>
                                </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="likeUnitwrapper">
                <li className="sumcount">
                    <div className="price-13" id="price-sum">
                        <span className="currency">결제 예정 금액 :</span>
                        <div className="price-sumcount">
                        <strong className="amount"> 40000 x 3 = 120,000</strong>
                        <span className="currency">원</span>
                        </div>
                    </div>
                </li>
                </ul>
                        <h1 className="page-tit">주문자 정보</h1>
                        <form className="blog-write-form" action="/" method="POST">
                                <div className="write-inputs">
                                <div className="first-inputs">
                            <div className="email"><strong>이메일</strong> <Input type={'text'} placeholder={'n_uck@naver.com'} name={'buyer_email'}/></div>
                            <div className="name"><strong>이름</strong> <Input type={'text'} placeholder={'소윤희'} name={'buyer_name'} /></div>
                            <div className="name"><strong>전화번호</strong> <Input type={'text'} name={'buyer_phone'} /></div>
                            <div className="addr"><strong>주소</strong> <Input type={'text'} name={'buyer_addr'} /></div>
                            <div className="postcode"><strong>우편번호</strong> <Input type={'text'} name={'postcode'} /></div>
                        
                        <div className="order-form-message">
                        <p>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
                        </div>
                        </div>
                        </div>
                        <div className="buyBtn-section">
                        <button className="btn-secondary btn-55" id="buyBtn" onClick={payment}>결제하기</button>
                        </div>
                        </form>
                    </div>
                    </div>
                 </div>
             </div>
         </div>
        </div>
        );
    }
export default orderSheet;