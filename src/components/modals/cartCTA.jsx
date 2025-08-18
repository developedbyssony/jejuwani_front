import '../../css/productUnit.css';
import { useState, useEffect } from 'react';

function cartCTA({setCart, item, store, cart}) {
    function openCartModal() {
            console.log(item);
            setCart();
            cart(item.id,item.title,item.price);
    }
    return (
        <button
        type="button" 
        className="list-item-ic-cart" 
        onClick={openCartModal}>
        <h1 className="ic-cart"></h1>
        </button>
       )     
    }

export default cartCTA;  