import { useState, useEffect } from 'react';
import CartItem from './CartItem';
//CartCount wholePrice={wholePrice}/>

function CartList({cartItem, number, onIncrease, onDecrease, getCartItems}) {
    // 로컬스토리지에 저장된 {}를 한개씩 불러올 수 있도록!
    const [ state, setState ] = useState([]); 
    /*[{
        id:'',
        title:'',
        price:'',
        regdate:'',
        hit:'',
        like:'',
        count:'',
        imgSrc:'',

        le.log(res);

    const initData = res.slice(0,20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    }) // 0 -19까지 자름

    setData(initData); 
  }; // promise를 반환하는 비동기 함수
    }]
    */

    // 장바구니 아이템이 5개 이상 담기면 얼럿띄우기!
    useEffect(() => {
        const cartItems = getCartItems().then(res => {let data = JSON.stringify(res,null,2); setState(data);});
        console.log(state);       
        //console.log(state);
        //console.log(JSON.parse(state)[0].id);
        //console.log(JSON.parse(state).length); //10개 만들어야..
    },[]);
    //const it = JSON.parse(state)[0];
    //console.log(it);
    const createArray = length => [...Array(length)];
    const cartItemList = createArray(4).map((n,i) => (<li key={i}> <CartItem item={cartItem} idx={i} number={number} onIncrease={onIncrease} onDecrease={onDecrease}  /></li>));
 
    return(
        <ul className="likeUnitwrapper">
        {cartItemList}
        </ul>
    )
}

export default CartList;