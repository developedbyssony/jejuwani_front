import { useState, useEffect, useRef } from 'react';
import { useSelector,  useDispatch } from "react-redux"
import '../../css/likeCard.css';
import { addToCart } from '../../actions/index';

function likeCard({category,item,onRemove,cart}) {
    const [ likeCartItems, setLikeCartItems ] = useState([]);
    const dispatch = useDispatch();

    const fid = useRef();
    const ftitle = useRef();
    const fprice = useRef();

    const handleRemove = (e) => {
        if(window.confirm(`${e.target.value}를 정말 삭제하시겠습니까?`)) {
        onRemove(e.target.value); 
     } 
    };

            return (
                item.map((i,idx) => (
                <li className="like-list-item" ref={fid}>
                    <div className="like-list-item-contents">
                    <div className="like-card-left-sec">
                            <a className="tag" href="/">{category}</a>
                            <h1 claassName="info-tit" id="info-tit" ref={ftitle}>{i.title}</h1>
                            <div className="info-review">
                                <div className="star-rating-13">
                                    <i className="ic-star is-active"></i>
                                    <i className="ic-star is-active"></i>
                                    <i className="ic-star is-active"></i>
                                    <i className="ic-star is-active"></i>
                                    <i className="ic-star is-active"></i>
                                </div>
                            <p>
                            <strong>3</strong>
                            <span>개 리뷰</span>
                            </p>
                        </div>
                    </div>
                    <div className="like-card-right-sec">
                        <div className="like-list-item-ic-cart" onClick={cart}>
                        <h1 className="ic-cart">
                        </h1>
                        </div>
                        <h1 className="like-list-item-ic-delete" value={i.id} onClick={handleRemove}></h1>
                        <div className="like-card-price">
                            <div className="price-20">
                            <strong className="amount" ref={fprice}>{i.price}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                </li>
            )))
    }

export default likeCard;