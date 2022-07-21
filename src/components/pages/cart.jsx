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
                // const data = await response.json();
                const data = await response.json();
               // console.log(data);
                //console.log(JSON.stringify(data,null,2));
                const jsonData = JSON.stringify(data,null,2);
                //console.log(jsonData);
                //console.log(JSON.parse(jsonData));
                const initData = data.map((it) => {
                    return {
                        id:it.id,
                        title:it.title,
                        region:it.region,
                        regdata:it.regdata,
                        hit:it.hit,
                        like:it.like,
                        count:it.count,
                        imgSrc:it.imgSrc,
                    }
                })
                setCartItems(initData);
                /*
                for(let i = 0; i < data.length; i++) {
                    console.log(data[i]);
                }
                console.log(cartData);
                return cartData;
                */
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }

    //.then(res => {let data = JSON.stringify(res,null,2); 
    // setCartItems(data);});
    // console.log(cartData);  

    useEffect(() => {
        getCartItems();
        console.log(cartData[0]);
    },[cartData]);

    const likeCate1 = "액티비티";
    const eventKey1 = "activity";
    const likeCate2 = "레스토랑";
    const eventKey2 = "restaurant";
    /*
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
    }
    */
    /*
    const totalCart = cartData.length;
    const createArray = length => [...Array(length)];
    function setCartList({ totalCart }) {
        return createArray(totalCart).map((n,i) => (<CartList key={i} cartItem={cartData} onIncrease={onIncrease} onDecrease={onDecrease} number={number} getCartItems={getCartItems} onRemove={onRemove} />));
    }
    */
    /*
    const onRemove = (targetId) => {
            console.log(`${targetId}가 삭제되었습니다.`);
            const newCartList = cartData.filter((it) => it.id !== targetId);
            console.log(newCartList);
            setCartItems(newCartList);
    }
    */
    
    const onRemove = () => {
        console.log('ss');
    }


    const wholePrice = 40000;
        return (
            <div className="section">
            <div className="container">
                <div className="cart-top-sec">
                <h1 className="page-tit">장바구니 🛒</h1>
                {/*setCartList(totalCart)*/}
                <CartList cartItem={cartData} onRemove={onRemove} />
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
            </div>
        );
    }

export default my;