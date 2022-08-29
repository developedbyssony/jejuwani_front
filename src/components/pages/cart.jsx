import { useState, useEffect, useRef } from 'react';
import Tab  from '../tab';
import LikeListA from '../likeListActivity';
import LikeListR from '../likeListRestaurant';
import CartList from '../cart/CartList';

function my({serverURL, userId, store}) {
    const [ isItEmpty, conFirmList ] = useState(false);
    let [ isitcartData, setCartData ] = useState(true); 
    let [ cartData, setCartItems ] = useState([]); 

    useEffect(() => {
        const initialCartItem = localStorage.getItem('newCartState') ? JSON.parse(localStorage.getItem('newCartState')) : [];
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
        console.log(cartData);
        const data = cartData.map(it => {
            if(it[0].id == i.target.value) {
                const count = it[0].count + 1;
                it[0] = {...it[0], count : count};
            }
            return it;
        });
        setCartItems(data);
        console.log(data);
        console.log('되는곤가');
        console.log(cartData);
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
        console.log(targetId);
        const arr = [];
        const data = cartData.map(it => {
            if(it[0].id !== targetId) {
                console.log('연산확인');
            }
        });
        console.log(arr);
        /*
        setCartItems(JSON.parse(newCartList));
        localStorage.setItem('newCartState',newCartList);
        */
    }

    const onRemoveLike = () => {
        console.log('삭제');
    }

    
    function cart(productId,productTitle,productPrice) {
        console.log("클릭");
        const count = 1;
        const newCart = [ {
            id : productId,
            title : productTitle,
            price : productPrice,
            count : count
        }];
        setCartItems([newCart,...cartData]);
        console.log(cartData);
        localStorage.setItem('cartItem', JSON.stringify(newCart));
        const entryArr = localStorage.getItem('cartState') ? JSON.parse(localStorage.getItem('cartState')) : [];
        if(entryArr == null) entryArr = [];
        entryArr.push(newCart);
        localStorage.setItem('newCartState',JSON.stringify(cartData));
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
                    contents1={<LikeListA onRemove={onRemoveLike} cart={cart}/>}
                    contents2={<LikeListR onRemove={onRemoveLike} />}
                    />
                </div>
            </div>
            </div>
            </div>
        );
    }

export default my;