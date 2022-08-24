import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartCount from './CartCount';
import CartList_empty from './CartList_empty';

function CartList({isItEmpty, cartItem, onIncrease, onDecrease, onRemove, store, userId, serverURL}) {
    const [ isItEmptyy, confirmList ] = useState(false);
    useEffect(() => {
        if(cartItem.length === 0) {
            confirmList(true);
        } else {
            confirmList(false);
        }
        console.log(cartItem);
        console.log(isItEmpty);
        },[cartItem]);

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
        }
         */
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
        //const cartItems = getCartItems().then(res => {let data = JSON.stringify(res,null,2); setState(data);});
        //console.log(state);       
        //console.log(JSON.parse(state)[0].id);
        //console.log(JSON.parse(state).length); //10개 만들어야..

    //const it = JSON.parse(state)[0];
    //console.log(it);
    /*
    const createArray = length => [...Array(length)];
    const cartItemList = createArray(cartItem.length).map((n,i) => (<li key={i}> <CartItem item={cartItem} idx={i} number={number} onIncrease={onIncrease} onDecrease={onDecrease} onRemove={onRemove} /></li>));
    */
    return(
        <ul className="likeUnitwrapper">
        <CartItem item={cartItem} onRemove={onRemove} onIncrease={onIncrease} onDecrease={onDecrease} store={store} userId={userId} serverURL={serverURL} isItEmpty={isItEmpty}/>
        { isItEmptyy ? <CartList_empty /> : <CartCount item={cartItem} onIncrease={onIncrease} onDecrease={onDecrease}/>}
        </ul>
    )
}

export default CartList;