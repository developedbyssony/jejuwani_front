import { useState, useRef, useEffect } from 'react';
import { useSelector,  useDispatch } from "react-redux"
import { pickItem } from '../../actions/index';
import { useHistory } from "react-router-dom";
import Rating from '../star-rating/rating';
import '../../css/productUnit.css';

function productUnitRestaurantMap({item, reverse}) {
    const history = useHistory();
    const view_url = `/detail2/${item.id}`;

    const fid = useRef();
    const ftitle = useRef();

    let [ product, setProduct ] = useState(item.like)
    const [ likeItems, setLikeItems ] = useState([]);
    const dispatch = useDispatch();

    function like() {
        console.log("클릭");
        let classList = event.target.classList.length;
        if(classList === 1) {
        setProduct(product-1); }
        else {
        setProduct(product+1);   
        }
        const productId = fid.current.id;
        const productTitle = ftitle.current.innerHTML;
        dispatch(pickItem({productId,productTitle}));
        const newLike = {
            id : productId,
            title : productTitle,
        };
        setLikeItems([newLike,...likeItems]);
        console.log(likeItems);
        localStorage.setItem('likeState2', JSON.stringify(likeItems));
        console.log(localStorage.getItem('likeState2'));
    }

    return (
        <div className="wrap-css">
        <div className="productUnit-frame">
            <div className="productUnit-img-restaurant" onClick={()=> {history.push({
            pathname: view_url,
            state: {post:item}
        })}}>
                <img src={item.imgSrc} alt="메인맛집유닛" style={{width:'250px', height:'230px', objectFit:'cover'}}/>
            </div>
            <div className="productUnit-contents">
                <div className="productUnit-contents-tit">
                    <p className="tag-outline" id="main-restaurant-tag" ref={ftitle}>{item.region1}</p>
                    <p className="unit-tit text-style-24" style={{fontWeight:'600'}}>{item.title}</p>
                    <div className="productUnit-contents-price">
                    <h1 className="unit-tit price-20"></h1>
                    </div>
                    <div className="productUnit-contents-like">
                        <div id={item} ref={fid} className="heartNotActive" onClick={(event) => {
                                                                            reverse(event);
                                                                            like(event);
                                                                        }}></div>
                        <h1 className="unit-tit text-style-13">{product}</h1>
                    </div>
                </div>
                <div className="productUnit-contents-address">
                    <h1 className="unit-tit text-style-13">{item.region}</h1>
                </div>
                <div className="productUnit-contents-rating">
                <div className="productUnit-contents-rating">
                <Rating rating={item.rating}></Rating> ({item.rating}점)
                </div>                </div>
            </div>
        </div>
    </div>)
}

export default productUnitRestaurantMap;