import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../css/write.css';

class writeReview extends Component {
    render() {
        return (
            <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="section">
                        <h1 className="page-tit">구매한 상품 리뷰 쓰기</h1>
                        <div class="drop-menu btn-outlined">
                                <div class="dropdown">
                                    <button type="button" data-bs-toggle="dropdown" class="btn dropdown-toggle btn-footer" aria-expanded="false">
                                    <span>구매한 상품 목록</span>
                                    </button>    
                                    <ul class="dropdown-menu" role="menu" id="my-order-list">
                                    <Link to="/detail"><li><a class="dropdown-item" href="#">서프로와 함께하는 서핑 강습 1일권</a></li></Link>
                                    <Link to="/detail"><li><a class="dropdown-item" href="#">애월에서 즐기는 투명 카약 이용권</a></li></Link>
                                    </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default writeReview;