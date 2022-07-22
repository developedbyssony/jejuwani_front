//import axios from "axios";
import { decrease } from 'actions';
import { useState, useEffect } from 'react';
import { useSelector,  dispatch } from "react-redux"
import '../../css/cart.css'
import { increase } from '../../actions/index';

function CartItem({item, idx, onIncrease, onDecrease, onRemove, store, userId, serverURL}) {
    const initData = useSelector((state : initialState) => state.count);
    const initialCartItem = localStorage.getItem('cartState') ? JSON.parse(localStorage.getItem('cartState')): [];
    const [ cartItems, setCartItems ] = useState(0);

    useEffect(() => {
        if(initData > 10) {
            alert("장바구니에 담을 수 있는 최대 수량은 10개입니다.");
            store.dispatch(decrease(1));
        }
        else if(initData < 0) {
            alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
            store.dispatch(increase(1));
        }
    },[initData]);

    /* 백엔드 통신 함수 (한 유저의 장바구니 가져오기)
    const getCartItems = async() => {
        axios.get(`${serverURL}/cart/list/`${userId}`, {
            headers: {
              'Content-Type': 'application/json',}}).then(res => {
                console.log("카트 리스트 get");
                setCartItems(res.json());
            }).catch(ex =>{
                console.log("requset fail");
                }).finally(()=>{console.log("request end")});
        }
    */

    /* 백엔드 통신 함수 (장바구니 삭제)
    const deleteCartItems = async() => {
        axios.post(`${serverURL}/cart/`${userId}`, {
            headers: {
              'Content-Type': 'application/json',}}).then(res => {
                console.log("카트 리스트 get");
                setCartItems(res.json());
            }).catch(ex =>{
                console.log("requset fail");
                }).finally(()=>{console.log("request end")});
        }
    */
    
    function handleIncrement(i) {
        console.log('증가');
        store.dispatch(increase(1));
        /*
        const cartItems = cartState.map(item => {
          if(item.id === i.id) {
            return {...i, count: i.count + 1};
          } 
          return item;
        })
        setCartItems({  cartItems });
        */
      };
      
    function handleDecrement(i) {
        console.log('감소');
        store.dispatch(decrease(1));
        /*
        const cartItems = cartState.map(item => {
          if(item.id === i.id) {
              const quanti = i.count - 1;
              return {...i, quanti : count < 0 ? 0 : count };                
              } 
          return item;
        })
        setCartItems({  cartItems });
        */
      };

    const handleRemove = (e) => {
           console.log(e);
           console.log(e.target.value);
           window.confirm(`${e.target.value}를 정말 삭제하시겠습니까?`);
           onRemove(); 
        }   

    return (
        item.map((i,idx) => (<div>
        <li className="cart-item" key={i.id}>
        <div className="flex-box">
        <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
            <img 
                src={i.imgSrc}
                className="cart-item-img"
                alt="액티비티 이미지"
            />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="cart-item-txt">
                    <p>{idx}</p>
                    <h3>{i.title}</h3>
                    <p className="ml-4">
                        {(item.price * initData).toLocaleString()}원
                    </p>
                </div>
            </div>
            </div>
            </div>
            <div className="cart-item-btn-sec">
                <div className="cart-item-count">
                    <button
                        className="decrease-btn"
                        onClick={handleDecrement}
                    >
                        -
                    </button>
                    <div className="mx-2 font-bold">{initData}</div>
                    <button
                        className="increase-btn"
                        onClick={handleIncrement}
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
                        value={i.id}
                        onClick={handleRemove}>
                        삭제하기
                    </button>
                </button>
            </div>
    </li>
    </div>))
    )}

export default CartItem;