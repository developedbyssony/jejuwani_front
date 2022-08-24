import { useState, useEffect } from 'react';
import {  BrowserRouter as Router, Link } from "react-router-dom";
import "../css/App.css";
import Tooltip1 from './tooltip1';
import Tooltip2 from './tooltip2';

function Navbar({initialCartItem}) {
    const uid = localStorage.getItem('authId');
    let [ modalOpen, setModalOpen] = useState(false);
    let [ modalOpenL, setModalOpenL] = useState(false);

    const modalClose = () => {
        setModalOpen(!modalOpen);
      }

    const modalCloseL = () => {
        setModalOpenL(!modalOpenL);
      }

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
                            <div className="navber-menu-right-item">
                            <Link to="/cart"><h1 className="cart"></h1></Link>
                            { initialCartItem ? (<div className="dot"></div>) : null }
                            </div>
                            <div className="navber-menu-right-item">
                            <strong className="menu-right text-style-14" onClick={modalCloseL}>{uid}</strong>
                            {
                            modalOpenL && <Tooltip2
                            text1={loginText1}
                            text2={loginText2}
                            text3={loginText3}
                            modalCloseL={modalCloseL}
                            />
                            }
                            </div>
                            <div className="navber-menu-right-item">
                            <button className="btn-primary btn-40" id="nav-btn-write" onClick={modalClose}>글쓰기<h1 className="i-chevron"></h1></button>
                            {
                            modalOpen && <Tooltip1
                            text1={writeText1}
                            text2={writeText2}
                            modalClose={modalClose}
                            />
                            }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
}

export default Navbar;