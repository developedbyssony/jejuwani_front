import React from 'react';
import '../../css/cardUnit.css';
import { Link } from "react-router-dom";

function CartCount({ wholePrice }) {
            return (
            <>
               <ul className="likeUnitwrapper">
                <li className="sumcount">
                    <div className="price-13" id="price-sum">
                        <span className="currency">결제 예정 금액 :</span>
                        <div className="price-sumcount">
                        <strong className="amount"> { wholePrice } x 3 = 120,000</strong>
                        <span className="currency">원</span>
                    </div>
                </div>
                </li>
                <Link to="/order">
                <div className="buyBtn-section">
                    <button className="btn-secondary btn-55" id="buyBtn">구매하기</button>
                </div>
                </Link>
                </ul>
            </>        
            )
            };

export default CartCount;