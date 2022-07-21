//import axios from "axios";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../../css/cart.css'

function CartItem({item, idx, onIncrease, onDecrease, number}) {
    const [ cartState, setCartState ] = [{
        id:'',
        region:'',
        imgSrc:'',
        title:'',
        price:'',
        count:'',
    }];
    const initialCartItem = localStorage.getItem('cartState') ? JSON.parse(localStorage.getItem('cartState')): [];
    const [ cartItems, setCartItems ] = useState(initialCartItem);
    useEffect(() => {
        console.log(cartItems);
        console.log(initialCartItem);

        // 현재 로컬스토리지에 저장된 장바구니 아이템을 콘솔에서 확인
    },[]);

    /* 백엔드 통신 함수 
    const getCartItems = async() => {
        axios.get(`${serverURL}/cart/`, {
            headers: {
              'Content-Type': 'application/json',}}).then(res => {
                console.log("카트 리스트 get");
                setCartItems(res.json());
            }).catch(ex =>{
                console.log("requset fail");
                }).finally(()=>{console.log("request end")});
        }
    */
        /*
    function amountInputHandler(event) {
    }
    
    function decreaseCartItem() {
        dispatch({
            type: 'minusQTY',
            data: item.id
          });
        /*
        const newCartItems = [...cartItems];
        if (newCartItems[idx].count > MIN_COUNT) {
            newCartItems[idx].count -= 1;
            setCartItems(newCartItems);
        } else {
            alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
        }
    }

    function increaseCartItem() {
        dispatch({
            type: 'plusQTY',
            data: item.id
          });
        }
        /*
        const newCartItems = [...cartItems];
        if (newCartItems[idx].count < MAX_COUNT) {
            newCartItems[idx].count += 1;
            setCartItems(newCartItems);
        } else {
            alert('장바구니에 담을 수 있는 최대 수량은 10개입니다.');
        }
        */
        
    function deleteCartItem() {
        console.log(cartState);
        console.log(cartItems);
        const newCartItem = [...cartItems];
        console.log(newCartItem);
        newCartItem.splice(idx, 1);
        console.log(newCartItem);
    }
        /*
        const newCartItem = [...cartItems];
        newCartItem.splice(idx, 1);
        setCartItems(newCartItem);
        */

    return (
        <div>
        <li className="cart-item" key={item.id}>
        <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
            <img 
                src={item.imgSrc}
                className="cart-item-img"
                alt="액티비티 이미지"
            />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="flex justify-between text-base font-medium text-gray-900 cart-title">
                    <h3>{item.title}</h3>
                    <p className="ml-4">
                        {(item.price * item.count).toLocaleString()}원
                    </p>
                </div>
            </div>
            <div className="cart-item-btn-sec">
                <div className="cart-item-count">
                    <button
                        className="decrease-btn"
                        onClick={onDecrease}
                    >
                        -
                    </button>
                    <div className="mx-2 font-bold">{number}</div>
                    <button
                        className="increase-btn"
                        onClick={onIncrease}
                    >
                        +
                    </button>
                </div>
                <button
                    type="button"
                    className="font-medium text-sky-400 hover:text-sky-500">
                    <button
                        type="button"
                        className="btn-outlined btn-40 remove-btn"
                        onClick={deleteCartItem}>
                        삭제하기
                    </button>
                </button>
            </div>
        </div>
    </li>
    </div>
    )}

export default CartItem;

function Store(state) {
    return {
        state : state
    }
}