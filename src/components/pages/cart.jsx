import { useState, useEffect } from 'react';
import Tab  from '../tab';
import LikeListA from '../likeListActivity';
import LikeListR from '../likeListRestaurant';
import CartList from '../cart/CartList';
import CartCount from '../cart/CartCount';

function my({serverURL, onIncrease, onDecrease, number, userId}) {
    let [ cartData, setCartItems ] = useState([]); 
    async function getCartItems() {
        try {
            const response =  await fetch(
                "http://localhost:3000/dummy/ProductData.json",
                {
                    method: "GET",
                });
            if(response.ok) {
                console.log('ok');
                const data = await response.json();
                console.log(data);
                cartData = data;
                return cartData;
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCartItems();
    },[]);

    const likeCate1 = "액티비티";
    const eventKey1 = "activity";
    const likeCate2 = "레스토랑";
    const eventKey2 = "restaurant";
    const [ Product , getProductData ] = [{
        cart_id : 121152,
        product_id : 1232423,
        category : 1,
        count : 1,
        item : 'item',
        status : 1,
        price : 10000,
        address_id : 1,
        promotion_id : 1
    }, {
        cart_id : 121152,
        product_id : 1232423,
        category : 1,
        count : 1,
        item : 'item',
        status : 1,
        price : 10000,
        address_id : 1,
        promotion_id : 1
    }, {
        cart_id : 121152,
        product_id : 1232423,
        category : 1,
        count : 1,
        item : 'item',
        status : 1,
        price : 10000,
        address_id : 1,
        promotion_id : 1
    }, {        
        cart_id : 121152,
        product_id : 1232423,
        category : 1,
        count : 1,
        item : 'item',
        status : 1,
        price : 10000,
        address_id : 1,
        promotion_id : 1

    }, {
        cart_id : 121152,
        product_id : 1232423,
        category : 1,
        count : 1,
        item : 'item',
        status : 1,
        price : 10000,
        address_id : 1,
        promotion_id : 1
    }]
    
    const wholePrice = 40000;
        return (
            <div className="container">
                <div className="cart-top-sec">
                <h1 className="page-tit">장바구니 🛒</h1>
                <CartList cartItem={cartData} onIncrease={onIncrease} onDecrease={onDecrease} number={number} />
                <CartCount wholePrice={wholePrice}/>
                <h1 className="page-tit">찜 List</h1>
                <div>
                    <Tab 
                    eventKey1={eventKey1}
                    eventKey2={eventKey2}
                    tapTitle1={likeCate1}
                    tapTitle2={likeCate2}
                    contents1={<LikeListA />}
                    contents2={<LikeListR />}
                    />
                </div>
            </div>
            </div>
        );
    }

export default my;