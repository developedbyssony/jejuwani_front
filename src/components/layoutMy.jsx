import React from 'react';
import Navbar1 from './navbarLogin';
import Navbar2 from './navMy1';
import Footer from './footer';

const Layout = (props) => {
    return(
        <div>
            <Navbar1 />
            <Navbar2 />
            {props.children}
            <Footer />
        </div>    
    )
};

export default Layout;