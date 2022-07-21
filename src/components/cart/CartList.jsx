import { useState, useEffect } from 'react';
import CartItem from './CartItem';
//CartCount wholePrice={wholePrice}/>

function CartList({cartItem, number, onIncrease, onDecrease, getCartItems, onRemove}) {
    // 로컬스토리지에 저장된 {}를 한개씩 불러올 수 있도록!
    const [ state, setState ] = useState([]); 

    // 장바구니 아이템이 5개 이상 담기면 얼럿띄우기!
    useEffect(() => {
        console.log(cartItem.length);
        //const cartItems = getCartItems().then(res => {let data = JSON.stringify(res,null,2); setState(data);});
        //console.log(state);       
        //console.log(state);
        //console.log(JSON.parse(state)[0].id);
        //console.log(JSON.parse(state).length); //10개 만들어야..
    },[]);
    //const it = JSON.parse(state)[0];
    //console.log(it);
    /*
    const createArray = length => [...Array(length)];
    const cartItemList = createArray(cartItem.length).map((n,i) => (<li key={i}> <CartItem item={cartItem} idx={i} number={number} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} /></li>));
    */
    return(
        <ul className="likeUnitwrapper">
        <CartItem item={cartItem} onRemove={onRemove} />
        </ul>
    )
}

export default CartList;