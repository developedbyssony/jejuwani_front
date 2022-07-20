import { useState } from 'react';
import '../../css/modal.css';
import { Link } from "react-router-dom";

function cartModal({productId, modalClose}) {
    const initialCartItem = localStorage.getItem('cartState') ? JSON.parse(localStorage.getItem('cartState')) : [];
    const [cartItems, setCartItems] = useState(initialCartItem);
    const [ isCartOpen, setIsCartOpen ] = useState(false);

    const saveToLocalStorage = () => {
        localStorage.setItem('cartState', JSON.stringify(cartItems));
    };

    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    }

    function handleAddProduct() {
        dispatch({ type : 'addItem', payload : {productId}});
        /*
        const newCartItems = [];
        setCartItems(newCartItems);
        saveToLocalStorage();
        console.log(localStorage.getItem('cartState'));
        toggleCart();
        */
    }
            return (
                <div className="modal-bgc">
                <aside className="cart-modal"> 
                    <h1 className="cart-tit">장바구니에 상품을 담았습니다.</h1>
                    <div className="btn-group-cart">
                    <Link to="/cart">
                    <a className="btn-primary btn-40" href="/" onClick={handleAddProduct}>
                        장바구니 보러가기
                    </a>
                    </Link>
                    <div className="btn-secondary btn-40" onClick={modalClose}>
                        확인
                    </div>
                    </div>
                </aside>
                </div>
            )
            }

export default cartModal;