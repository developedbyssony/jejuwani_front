import React from 'react';
import Navbar0 from './navbarLogin';
import Navbar2 from './navMy2';
import Footer from './footer';

const Layout = (props) => {
    return(
        <div>
            <Navbar0 />
            <Navbar2 />
            {props.children}
            <Footer />
        </div>    
    )
};

export default Layout;