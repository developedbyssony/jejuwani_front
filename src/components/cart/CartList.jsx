import { useState, useEffect } from 'react';
import CartItem from './CartItem';

function CartList({cartItem, onIncrease, onDecrease, getCartItems, onRemove, store, userId, serverURL}) {
    const [ state, setState ] = useState([]); 

    useEffect(() => {
        console.log(cartItem.length);
        //const cartItems = getCartItems().then(res => {let data = JSON.stringify(res,null,2); setState(data);});
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
        <CartItem item={cartItem} onRemove={onRemove} onIncrease={onIncrease} onDecrease={onDecrease} store={store} userId={userId} serverURL={serverURL} />
        </ul>
    )
}

export default CartList;