import { useState, useRef, useEffect }  from 'react';
import '../../css/review-card.css';
import Rating from '../star-rating/rating'

function reviewCard({review}) {
        const [ data, setData ] = useState([]);
        const created_date_year = new Date().getFullYear();
        const created_date_month = new Date().getMonth() + 1;
        const created_date_date = new Date().getDate();
        const created_date_day = new Date().getDay();

        const getData = async() => {
        const initData = review.slice(1,10).map((it) => {
            return {
                author:it.author,
                content:it.content,
                rating: it.rating,
            }
        })
        setData(initData);
    }

        useEffect(()=> { 
            getData();
            const initData = review.slice(1,10).map((it) => {
                return {
                    author:it.author,
                    content:it.content,
                    rating: it.rating,
                }
            })
            console.log(review);
          }, []);

        return (
            <ul className="reviewUnitWrapper">
                <h1 className="page-tit" id="product-info-tit"><h1 className="check"></h1>리뷰</h1>
            {review.slice(1,10).map((rv,i) => 
                <ol className="review-list">
                <li className="review-item">
                    <article className="review-card">
                        <header className="review-card-header">
                            <h3 className="visually-hidden">김유저 님이 작성한 리뷰</h3>
                        <div className="review-card-body">
                            <div className="info">
                            <strong>
                                <h6 className="tag-outline" id="comment-index">{i+1}번째 리뷰</h6><a className="username" href="#">{rv[0].author}</a>
                            </strong>
                            <div className="detail">
                            <div className="star-rating" aria-label={`${rv[0].rating}/ 5.0점`}>
                                <Rating total={5} rating={rv[0].rating}/>
                            </div>
                            <div className="comment-time">
                            <time>{created_date_year}년 {created_date_month}월 {created_date_date}일</time>
                            {
                            created_date_day === 1
                            &&
                            <time>(월)</time>
                            }
                            {
                            created_date_day === 2
                            &&
                            <time>(화)</time>
                            }
                            {
                            created_date_day === 3
                            &&
                            <time>(수)</time>
                            }
                            {
                            created_date_day === 4
                            &&
                            <time>(목)</time>
                            }
                            {
                            created_date_day === 5
                            &&
                            <time>(금)</time>
                            }
                            {
                            created_date_day === 6
                            &&
                            <time>(토)</time>
                            }
                            {
                            created_date_day === 7
                            &&
                            <time>(일)</time>
                            }
                            </div>
                            </div>
                            </div>
                        </div>
                        </header>
                        <div>
                            <p className="review-contents" id="comment-contents">
                            {rv[0].content}
                            </p>
                        </div>
                    </article>
                </li>
            </ol>
        )}
        { console.log(review.slice(1,10)) }
        </ul>
        )
        }

export default reviewCard;