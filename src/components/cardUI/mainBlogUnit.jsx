import React from 'react';
import '../../css/blogUnit.css';

export default function mainBlogUnit() {
    return (
        <div className="section-main-blog">
        <div className="section-main-blog-contentsDisplayArea">
        <div className="section-main-blog-m">
            <div className="blog-main-frame">
            <div className="blog-main-img">
            </div>
                <div className="blog-main-contents">
                    <div className="blog-main-contents-tit">
                    <h4 className="blog-main-name">비터팬의 식도락</h4>
                    <div className="plus-btn-section">
                    <div className="plus-btn">
                        <h1 className="add"></h1>
                    </div>
                    <p className="plus-num">10,929</p>
                    </div>
                    </div>
                    <div className="blog-main-contents-desc">
                    <h6 className="blog-main-id">@bitterpan</h6>
                    <p className="blog-main-desc">
                    장사 더 잘 될 자격있는 제주 음식점, 직접 찾아가서 맛본 후 제대로 소개시켜드릴게요.
                    </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        )
}