import React from 'react';
import CartItem from './CartItem';

function CartList({cartItem, number, onIncrease, onDecrease}) {
    // 로컬스토리지에 저장된 {}를 한개씩 불러올 수 있도록!
    const cartItems = ['a','b','c','d','e']
    const cartItemList = cartItems.map((cartItems, idx) => (<li key={idx}><CartItem item={cartItem} idx={idx} number={number} onIncrease={onIncrease} onDecrease={onDecrease} /></li>));
    return(
        <ul className="likeUnitwrapper">
        {cartItemList}
        </ul>
    )
}

export default CartList;