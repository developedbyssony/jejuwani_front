import { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip1 from './tooltip1';
import Tooltip2 from './tooltip2';

function Navbar() {
    let [ modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen(!modalOpen);
      }
        const uid = 'n_uck';
        const loginText1 = '마이페이지';
        const loginText2 = '🌴 여행계획서';
        const loginText3 = '로그아웃';
        const writeText1 = '블로그 쓰기  ✏️';
        const writeText2 = '리뷰 쓰기  ✍';
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="navbar">
                        <a hef="#">
                        <h1 className="logo"></h1>
                        </a>
                        <div className='navbar-menu-div'>
                            <a className="menu text-style-18"><Link to="/navigation">교통</Link></a>
                            <a className="menu text-style-18"><Link to="/activity">액티비티</Link></a>
                            <a className="menu text-style-18"><Link to="/restaurant">맛집</Link></a>
                            <a className="menu text-style-18"><Link to="/blog">커뮤니티</Link></a>
                        </div>
                        <div className='navbar-menu-right'>
                            <a hef="#"><Link to="/cart"><h1 className="cart"></h1></Link></a>
                            <a className="menu-right text-style-14"><Link to="/login">로그인</Link></a>
                            <a className="menu-right text-style-14"><Link to="/signup">회원가입</Link></a>
                            <button className="btn-primary btn-40" id="nav-btn-write" onClick={modalClose}>글쓰기<i className="ic-chevron" id="write-chevron"></i></button>
                        </div>                                
                    </div>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;