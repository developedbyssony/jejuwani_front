import { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector,  useDispatch } from "react-redux"
import { addToCart, pickItem } from '../../actions/index';
import Modal from '../modals/cartModal';
import '../../css/productUnit.css';
import CartCTA from '../modals/cartCTA';
import Rating from '../star-rating/rating';


function productUnit({item, setCart, reverse, store}) {
    const history = useHistory();
    const view_url = `/detail/${item.id}`;
    const [ likeItems, setLikeItems ] = useState([]);
    const [ cartItems, setCartItems ] = useState([]);
    const dispatch = useDispatch();

    const fid = useRef();
    const ftitle = useRef();
    const fprice = useRef();
    const ftarget = useRef();

    useEffect(() => {
    },[]);

    function cart() {
        console.log("클릭");
        const productId = fid.current.id;
        const productTitle = ftitle.current.innerHTML;
        const productPrice = fprice.current.innerHTML;
        const count = 1;
        dispatch(addToCart({productId,productTitle,productPrice,count}));
        const newCart = {
            id : productId,
            title : productTitle,
            price : productPrice,
            count : count
        };
        setCartItems([newCart,...cartItems]);
        console.log(cartItems);
        localStorage.setItem('cartState', JSON.stringify(cartItems));
    }

    function like() {
        console.log("클릭");
        const productId = fid.current.id;
        const productTitle = ftitle.current.innerHTML;
        const productPrice = fprice.current.innerHTML || null;
        const count = 1;
        dispatch(pickItem({productId,productTitle,productPrice,count}));
        const newLike = {
            id : productId,
            title : productTitle,
            price : productPrice,
            count : count
        };
        setLikeItems([newLike,...likeItems]);
        console.log(likeItems);
        localStorage.setItem('likeState', JSON.stringify(likeItems));
        console.log(localStorage.getItem('likeState'));
    }

    return (
        <div className="wrap-css">
        <div className="productUnit-frame">
            <div className="productUnit-img" ref={fid} id={item.id} onClick={()=> {history.push({
            pathname: view_url,
            state: {post:item}
        })}}>
                <img src={item.imgSrc} alt="메인액티비티유닛" style={{width:'265px', height:'230px', objectFit:'cover'}}/>
            </div>
            <CartCTA store={store} setCart={setCart} cart={cart}/>
            <div className="productUnit-contents">
                <div className="productUnit-contents-tit">
                <p className="tag-outline" id="main-restaurant-tag" ref={ftitle}>{item.region1.label}</p>
                <p className="unit-tit text-style-24" style={{fontWeight:'600'}}>{item.title}
                <div className="productUnit-contents-price">
                    <h1 className="unit-tit price-20" ref={fprice}>{(item.price * 1).toLocaleString()}원</h1>
                </div>
                </p>
                <div className="productUnit-contents-like">
                    <div id={item.id} className="heartNotActive" ref={ftarget} onClick={(event) => {
                                                                            reverse(event);
                                                                            like(event);
                                                                        }}></div>
                    <h1 className="unit-tit text-style-13">{item.like}</h1>
                </div>
                </div>
                <div className="productUnit-contents-address">
                    <h1 className="unit-tit text-style-13">{item.region}</h1>
                </div>
                <div className="productUnit-contents-rating">
                <Rating rating={item.id}></Rating>
                </div>
            </div>
        </div>
        </div>
    )}

export default productUnit;