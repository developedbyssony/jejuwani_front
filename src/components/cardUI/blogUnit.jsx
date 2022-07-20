import React from 'react';
import '../../css/blogUnit.css';

export default function blogUnit() {
    return (
            <div className="blog-main-frame-sub">
                <div className="blog-main-img-sub">
                    유저 프로필 이미지
                </div>
                <div className="blog-main-contents-sub">
                    <h3>블로그 타이틀</h3>
                    <p>(@유저의 아이디)</p>
                    <p>블로그 소개글</p>
                </div>
                <div className="plus-btn-section-sub">
                    <div className="plus-btn">
                    <h1 className="add"></h1>
                    </div>
                    <p className="plus-num">1234</p>
                </div>
            </div>
        )
}