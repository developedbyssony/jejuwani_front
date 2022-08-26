import { useState, useEffect } from 'react';
import '../css/checkout-card.css';
import '../css/order-form.css';
import '../css/product-detail.css';
import ProductNavBar from './productDetailNavBar';
import KakaoMapRestaurant from '../service/kakaoMapRestaurant.js';
import Rating from './star-rating/rating';

function productShow2({serverURL, product_info, review}) {
    useEffect(() => {
        console.log(product_info);
        console.log(review);
      },[]);

    let [ heart, setheart ] = useState([false]);
    let [ product, setProduct ] = useState(
        {
           product_id: product_info.post.id, // 고유번호
           category: '2', // 액티비티인지, 레스토랑인지 분류
           title: product_info.post.title, // 프로덕트(게시글) 이름
           region: '2', // 주소가 속한 지역
           rating: product_info.post.rating, // 별점 평균
           review : product_info.post.review.length || 0, // 총 리뷰의 갯수
           setHeart : heart, // 유저가 like를 눌렀는가? (bool) -> like 눌렀을 시 유저 아이디에 제품 정보 save
           address : product_info.post.region,
           hit : product_info.post.hit,
           likes : product_info.post.like, // 제품이 총 like를 받은 수 (숫자)
           latitude : product_info.post.latitude,
           longitude : product_info.post.longitude,
           imgSrc : product_info.post.imgSrc,
           tag: product_info.post.tag,
           content :  product_info.post.introduction,
           label: product_info.post.region1.label,
        })

    let [ like, setlike ] = useState(product.likes);

    const onClickHeart = e => {
        const { count, value } = e.target;
        setProduct({...product, [count]:value});
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
    return(
    <div className="conatiner-fluid">
    <div className="productShow">
        <div className="product-overview">
        <div className="row">
            <div className="col-5">
            <div className="product-img-detail-restaurant">
            <img src={product.imgSrc} alt="맛집이미지" id="img-restaurant" style={{width:'670px', height:'670px', objectFit:'cover'}}/>
            </div>
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
                <Rating rating={product.product_id}></Rating>
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
                <span>{product.likes}</span>
                </div>
                <div className="product-info-address">
                <div className="address">
                <p className="text-sytle-13">{product.address}</p>
                <p className="tag-outline">{product.label}</p> 
                </div>
                </div>
                </div>
            </div>
            <KakaoMapRestaurant latitude={product.latitude} longitude={product.longitude} title={product.title}/>
        </div>
        </div>
        </div>
        </div>
        <ProductNavBar product={product} review={review}/>
    </div>
    );
}

export default productShow2;