//import axios from "axios";
import { useState, useEffect } from 'react';
import { useSelector,  useDispatch } from "react-redux"
import '../../css/cart.css'
import { increase } from '../../actions/index';
import { decrease } from 'actions';

function CartItem({item, onIncrease, onDecrease, onRemove, store, userId, serverURL,isItEmpty}) {
    //const initData = store.getState().list;
    //const dispatch = useDispatch();
    const [ cartItems, setCartItems ] = useState([]);

    useEffect(() => {
        const data = item.map((it) => {
            return {
                id:it.id,
                price:it.price,
                title:it.title,
                count:it.count,
            }
        });
        console.log(data);
        if(data.length === 0) {
            console.log('배열 안에 아이템이 하나도 없습니당 ㅠㅠ');
         } else {
            console.log('배열 안에 아이템이 하나 이상 들어있습니다.');
            setCartItems([data,...cartItems]);
            console.log(cartItems);
        }

        /*
        if(initData > 10) {
            alert("장바구니에 담을 수 있는 최대 수량은 10개입니다.");
            store.dispatch(decrease(1));
        }
        else if(initData < 0) {
            alert('장바구니에 담을 수 있는 최소 수량은 1개입니다.');
            store.dispatch(increase(1));
        }
        */
        
    },[]);

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
    
    const handleIncrement = (e) => {
        console.log('증가');
        console.log(e.target.value);
        onIncrease(e.target.value);
        /*
        for (var i of cartItems) {
            onIncrease(i.count);
        }*/
        //onIncrease(i);
      };
      
      const  handleDecrement = (e) => {
        console.log('감소');
        //onDecrease(i);
        /*
        store.dispatch(decrease(1));
        */
      };

    const handleRemove = (e) => {
           if(window.confirm(`${e.target.value}를 정말 삭제하시겠습니까?`)) {
           onRemove(e.target.value); 
        } 
    };

    return (
    <div>
    {isItEmpty ? null : (item.map((i,idx) => (
        <li className="cart-item" key={idx}>
        <div className="flex-box">
        <div className="ml-4 flex flex-1 flex-col">
            <div>
                <div className="cart-item-txt">
                    <p>상품번호 {i[0].id}</p>
                    <h3>{i[0].title}</h3>
                    <p className="ml-4">
                        {i[0].price * i[0].count}
                        <strong>원</strong>
                    </p>
                </div>
            </div>
            </div>
            </div>
            <div className="cart-item-btn-sec">
                <div className="cart-item-count">
                    <button
                        className="decrease-btn"
                        value={i[0].id}
                        onClick={onDecrease}
                    >
                        -
                    </button>
                    <div className="mx-2 font-bold">{i[0].count}</div>
                    <button
                        className="increase-btn"
                        value={i[0].id}
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
                        value={i[0].id}
                        onClick={handleRemove}>
                        삭제하기
                    </button>
                </button>
            </div>
    </li>)))}
    </div>)}

export default CartItem;
