import { useState } from 'react';
import { Link } from "react-router-dom";
import "../css/App.css";

function Navbar({initialCartItem}) {
    let [ modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen(!modalOpen);
      }
        const loginText1 = '마이페이지';
        const loginText3 = '로그아웃';
        const writeText1 = '블로그 쓰기  ✏️';
        const writeText2 = '리뷰 쓰기  ✍';
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h2 class="visually-hidden">메뉴</h2>
                    <div className="navbar">
                        <a hef="#">
                        <h1 className="logo"></h1>
                        </a>
                        <div className='navbar-menu-div'>
                            <a className="menu text-style-18" aria-label="교통 페이지로 이동"><Link to="/navigation">교통</Link></a>
                            <a className="menu text-style-18" aria-label="액티비티 페이지로 이동"><Link to="/activity">액티비티</Link></a>
                            <a className="menu text-style-18" aria-label="맛집 페이지로 이동"><Link to="/restaurant">맛집</Link></a>
                            <a className="menu text-style-18" aria-label="커뮤니티 페이지로 이동"><Link to="/login">커뮤니티</Link></a>
                        </div>
                        <div className='navbar-menu-right'>
                            <a hef="#"><Link to="/cart"><h1 className="cart"></h1></Link></a>
                            <a className="menu-right text-style-14" aria-label="로그인 페이지로 이동"><Link to="/login">로그인</Link></a>
                            <a className="menu-right text-style-14" aria-label="회원가입 페이지로 이동"><Link to="/signup">회원가입</Link></a>
                            <button className="btn-primary btn-40" id="nav-btn-write" onClick={modalClose} aria-label="글쓰기 버튼"><Link to="/login">글쓰기</Link><h1 className="i-chevron"></h1></button>
                        </div>                                
                    </div>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;