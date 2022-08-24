import { useState, useEffect, useRef } from 'react';
import { useSelector,  useDispatch } from "react-redux"
import '../../css/likeCard.css';
import { addToCart } from '../../actions/index';

function likeCard({category,item, onRemove}) {
    const fid = useRef();
    const ftitle = useRef();

    const handleRemove = (e) => {
        if(window.confirm(`${e.target.value}를 정말 삭제하시겠습니까?`)) {
        onRemove(e.target.value); 
     } 
    };


            return (
                item.map((i) => (
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
                        <div className="like-card-right-sec">
                            <h1 className="like-list-item-ic-delete" id="like-card-delete-restaurant" value={i.id} onClick={handleRemove}></h1>
                        </div>
                    </div>
                </div>
                </li>
            )))
    }

export default likeCard;