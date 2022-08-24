import React from 'react';
import Navbar0 from './navbarLogin';
import Navbar2 from './navMy2';
import Footer from './footer';

const Layout = (props) => {
    const initialCartItem = localStorage.getItem('cartState');
    return(
        <div>
            <Navbar0 initialCartItem={initialCartItem}/>
            <Navbar2 />
            {props.children}
            <Footer />
        </div>    
    )
};

export default Layout;