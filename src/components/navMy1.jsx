import { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/category.css';

function NavbarMy() {

        return (
            <div className="category">
                    <div className="category-menu">
                        <a className="menu text-style-18"><Link to="/my">회원 정보 수정</Link></a>
                        <a className="menu text-style-18"><Link to="/blog">블로그</Link></a>
                        <a className="menu text-style-18"><Link to="/plan">여행계획서</Link></a>
                    </div>
            </div>
        );
}

export default NavbarMy;