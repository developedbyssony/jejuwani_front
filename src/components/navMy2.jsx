import { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/category.css';

function NavbarMy() {
        return (
            <div className="category">
                    <div className="category-menu">
                        <a className="menu text-style-18"><Link to="/blog">New!</Link></a>
                        <a className="menu text-style-18"><Link to="/myblog">마이 블로그</Link></a>
                    </div>
            </div>
        );
}

export default NavbarMy;