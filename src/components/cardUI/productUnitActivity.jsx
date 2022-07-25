import { useState, useRef, useEffect } from 'react';
import Modal from '../modals/cartModal';
import '../../css/productUnit.css';

function productUnit({item, setCart, closeCart}) {
    const cartBtn = useRef();

    useEffect(() => {
        console.log({item});
    },[]);

    return (
        <div className="productUnit-frame-activity">
            <div className="productUnit-img">
            </div>
            <button
                type="button" 
                className="list-item-ic-cart" 
                ref={cartBtn}
                onClick={closeCart}>
                <h1 className="ic-cart"></h1>
            </button>
                {
                  setCart && <Modal modalClose={closeCart} productId={item.id} />
                }
            <div className="productUnit-contents">
                <div className="productUnit-contents-tit">

                    <p className="unit-tit text-style-13">{item.region} </p>
                    <p className="unit-tit text-style-24">{item.title}</p>
                </div>
                <div className="productUnit-contents-bottom">
                <div className="productUnit-contents-price">
                    <h1 className="unit-tit price-20">{(item.price * 1).toLocaleString()}원</h1>
                </div>
                <div className="productUnit-contents-like">
                    <i className="ic-heart">🧡</i>
                    <h1 className="unit-tit like-13">{item.like}</h1>
                </div>
                </div>
            </div>
        </div>
    )
}

export default productUnit;