import '../../css/productUnit.css';
import { useState, useEffect } from 'react';
import Modal from './cartModal';

function cartCTA({setCart, store, cart}) {
    function openCartModal() {
            setCart();
            cart();
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