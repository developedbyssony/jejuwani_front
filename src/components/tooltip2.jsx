import React from 'react'
import {  BrowserRouter as Router, Link } from "react-router-dom";
import '../css/tooltip.css';

export default function loginTooltip({ text1, text2, text3, modalCloseL }) {
    return (
        <div className="my-menu">
        <div className='my-menu-content' id="loginTooltip">
        <div className='my-menu-list'>
            <div className="my-menu-item">
                <Link to="/my"><button type='button'>{text1}</button></Link>
            </div>
            <div className="my-menu-item">
                <Link to="/plan"><button type='button'>{text2}</button></Link>
            </div>
            <div className="my-menu-item">
                <Link to="/logout"><button type='button'>{text3}</button></Link>
            </div>
        </div>
        </div>
        </div>
    )
}