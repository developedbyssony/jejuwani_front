import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

class footer extends PureComponent {
    render() {
        return (
            <div className="container-fluid">
                <div className="footer">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-txtbox">
                            <ul className="footer-ul">
                                <li className="footer-tit">
                                    <a href="#">고객센터</a>
                                </li>
                                <li className="footer-tel">
                                    <a href="#">1004-1004</a>
                                </li>
                                <li className="footer-info1">
                                    <a href="#">평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</a>
                                </li>
                                <li className="footer-info2">
                                    <div className="footer-company-info">
                                        <span className="text-style-10">상호명 : 제주완니 | </span>
                                        <span className="text-style-10">이메일(고객문의) : nuck1004@gmail.com | </span>        
                                        <span className="text-style-10">이메일(제휴문의) : nuck1004@gmail.com | </span>
                                        <span className="text-style-10">주소 : https://youtube.com/ssony</span>
                                        <br />
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;