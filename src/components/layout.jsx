import React from 'react';
import Navbar from './navbar';
import NavbarLogIn from './navbarLogin';
import Footer from './footer';

const Layout = (props) => {
    const isAuthorized = localStorage.getItem('token') && localStorage.getItem('authId');
    return(
        <div>
            { isAuthorized  ? (<NavbarLogIn initialCartItem={props.initialCartItem} />) : (<Navbar initialCartItem={props.initialCartItem}/>)}
            {props.children}
            <Footer />
        </div>    
    )
};

export default Layout;