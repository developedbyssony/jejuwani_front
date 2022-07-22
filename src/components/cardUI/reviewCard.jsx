import { useState, useRef }  from 'react';
import '../../css/review-card.css';

function reviewCard() {
        return (
            <ol className="review-list">
                <li className="review-item">
                    <article className="review-card">
                        <header className="review-card-header">
                            <h3 className="visually-hidden">김유저 님이 작성한 리뷰</h3>
                        <div className="review-card-body">
                            <div className="info">
                            <strong>
                                <a className="username" href="/">김유저</a>
                            </strong>
                            <div className="detail">
                            <div className="star-rating-13" aria-label="5.0점 / 5.0점">
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                                <i className="ic-star is-active"></i>
                            </div>
                            <time datetime="2022-07-03">2022.07.03</time>
                            </div>
                            </div>
                        </div>
                        </header>
                        <div>
                            <p className="review-contents">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque praesentium nisi. Autem quibusdam iure ad est minus quaerat debitis itaque quasi tempore, error doloribus ratione quidem reprehenderit fugiat nulla?                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque praesentium nisi. Autem quibusdam iure ad est minus quaerat debitis itaque quasi tempore, error doloribus ratione quidem reprehenderit fugiat nulla?(450자 이상 ...처리)
                            </p>
                        </div>
                    </article>
                </li>
            </ol>
        );
        }

export default reviewCard;