import React from 'react';
import '../../css/productUnit.css';

function productUnitRestaurantMap({map}) {
    return (
        <div className="productUnit-frame">
        <div className="productUnit-map">
            {map}
            </div>
            <div className="productUnit-contents">
                <div className="productUnit-contents-tit">
                    <p className="unit-tit text-style-13">서브타이틀(맛집)</p>
                    <p className="unit-tit text-style-24">메인타이틀(만선식당)</p>
                    <div className="productUnit-contents-like">
                        <i className="ic-heart-outline"></i>
                        <h1 className="unit-tit text-style-10">저장</h1>
                    </div>
                </div>
                <div className="productUnit-contents-address">
                    <h1 className="unit-tit text-style-13">제주특별자치도 서귀포시 대정읍 하모항구로 44</h1>
                </div>
                <div className="productUnit-contents-rating">
                    <div className="star-rating-16">
                        <i class="ic-star is-active"></i>
                        <i class="ic-star is-active"></i>
                        <i class="ic-star is-active"></i>
                        <i class="ic-star is-active"></i>
                        <i class="ic-star is-active"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default productUnitRestaurantMap;