import React from 'react';
import Navbar from './navbarLogin';
import Footer from './footer';

const Layout = (props) => {
    const initialCartItem = localStorage.getItem('cartState');
    return(
        <div>
            <Navbar initialCartItem={initialCartItem}/>
            {props.children}
            <Footer />
        </div>    
    )
};

export default Layout;