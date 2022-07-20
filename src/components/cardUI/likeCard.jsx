import { useState } from 'react';
import '../../css/likeCard.css';
import Modal from '../modals/cartModal.jsx';

function likeCard() {
    const [ modalOpen, setModalOpen] = useState();
    const modalClose = () => {
        setModalOpen(!modalOpen);
      }
            return (
                <li className="like-list-item">
                    <div className="like-list-item-contents">
                    <div className="like-card-left-sec">
                            <a className="tag" href="/">Activity</a>
                            <h1 claassName="info-tit" id="info-tit">이호테우해변대표 서핑샵! 서프로와 서핑 강습</h1>
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
                        <div className="like-list-item-ic-cart" onClick={modalClose}>
                        <h1 className="ic-cart">
                        </h1>
                        </div>
                        {
                            modalOpen && <Modal
                            modalClose={modalClose}
                            />
                         }  
                        <h1 className="like-list-item-ic-delete"></h1>
                        <div className="like-card-price">
                            <div className="price-20">
                            <strong className="amount">46,500</strong>
                            <span className="currency">원</span>
                            </div>
                        </div>
                    </div>
                </div>
                </li>
            )
    }

export default likeCard;