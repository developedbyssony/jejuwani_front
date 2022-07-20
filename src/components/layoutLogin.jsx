import React from 'react';
import Navbar from './navbarLogin';
import Footer from './footer';

const Layout = (props) => {
    return(
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>    
    )
};

export default Layout;