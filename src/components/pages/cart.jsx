import { useState, useEffect, useRef } from 'react';
import Tab  from '../tab';
import LikeListA from '../likeListActivity';
import LikeListR from '../likeListRestaurant';
import CartList from '../cart/CartList';

function my({serverURL, userId, store}) {
    const [ isItEmpty, conFirmList ] = useState(false);
    let [ isitcartData, setCartData ] = useState(true); 
    let [ cartData, setCartItems ] = useState([]); 

    /* mock 테스트 
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
            } else {
            console.log('err');
            const errData = await response.json();
            throw errData;}
        } catch (e) {
            console.log(e);
        }
    }
*/

    useEffect(() => {
        const initialCartItem = localStorage.getItem('cartState') ? JSON.parse(localStorage.getItem('cartState')) : [];
        setCartItems(initialCartItem);
        console.log(cartData);
        if(initialCartItem.length === 0) {
            conFirmList(!isItEmpty);
            } else {
            conFirmList(false);
            }
        /*
        if(initialCartItem.count === 0) {
            conFirmList(!isItEmpty);
            console.log(isItEmpty);
        } else if (initialCartItem.count === 1){
            console.log('배열 안에 아이템이 하나 들어있습니다.');
            conFirmList(!isItEmpty);
            console.log(isItEmpty);
            const newCartItem = {
                id:initialCartItem.id,
                price:initialCartItem.price,
                title:initialCartItem.title,
                count:1,
            }
            setCartItems([newCartItem,...cartData]);
            console.log(cartItems);
        } else {
            console.log('배열 안에 아이템이 하나 이상 들어있습니다.');
            console.log(isItEmpty);
            const initCartItem = initialCartItem.map((it) => {
                return {
                    id:it.id,
                    price:it.price,
                    title:it.title,
                    count:1,
                }
            });
            setCartItems(initCartItem);
        }
        
        /*
        if(initialCartItem === null) {
            console.log('로컬스토리지가 비어있습니다.');
            console.log(isitcartData);
            /*
            const initCartItem = initialCartItem.map((it) => {
                return {
                    id:it.id,
                    price:it.price,
                    title:it.title,
                    count:1,
                }
            });
            setCartItems(initCartItem);
           
        } else {
            setCartData(!isitcartData);
            console.log(initialCartItem);
            setCartItems(initialCartItem);
        }*/
    },[]); 

    const likeCate1 = "액티비티";
    const eventKey1 = "activity";
    const likeCate2 = "레스토랑";
    const eventKey2 = "restaurant";

    /*
    const totalCart = cartData.length;
    const createArray = length => [...Array(length)];
    function setCartList({ totalCart }) {
        return createArray(totalCart).map((n,i) => (<CartList key={i} cartItem={cartData} onIncrease={onIncrease} onDecrease={onDecrease} number={number} getCartItems={getCartItems} onRemove={onRemove} />));
    }
    */

    const onIncrease = (i) => {
        const data = cartData.map(it => {
            if(it.id == i) {
                const count = it.count + 1;
                return {...it, count : count};
            }
            return it;
        })
        setCartItems(data);
    }

    const onDecrease = (i) => {
        const data = cartData.map(it => {
            if(it.id == i) {
                const count = it.count - 1;
                return {...i, count : count < 0 ? 0 : count};
            }
            return it;
        })
        setCartItems(data); 
    }

    
    const onRemoveCart = (targetId) => {
        console.log('삭제');
        const newCartList = cartData.filter((it) => it.id !== targetId);
        setCartItems(newCartList);
        localStorage.setItem('cartState',newCartList);
    }

    const onRemoveLike = () => {
        console.log('삭제');
    }

        return (
            <div className="section">
            <div className="container">
                <div className="cart-top-sec">
                <h1 className="page-tit">장바구니 🛒</h1>
                <CartList cartItem={cartData} onRemove={onRemoveCart} onIncrease={onIncrease} onDecrease={onDecrease} store={store} userId={userId} serverURL={serverURL} isItEmpty={isItEmpty}/>
                <br />
                <h1 className="page-tit">찜 List</h1>
                <div>
                <Tab 
                    eventKey1={eventKey1}
                    eventKey2={eventKey2}
                    tapTitle1={likeCate1}
                    tapTitle2={likeCate2}
                    contents1={<LikeListA onRemove={onRemoveLike}/>}
                    contents2={<LikeListR onRemove={onRemoveLike}/>}
                    />
                </div>
            </div>
            </div>
            </div>
        );
    }

export default my;