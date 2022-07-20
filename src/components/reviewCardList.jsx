import React from 'react';
import ReviewCard from './cardUI/reviewCard';

function reviewUnitList() {
    const ReviewUnit = ['a','b','c']
    const ReviewUnitList = ReviewUnit.map((ReviewUnit, index) => (<li key={index}><ReviewCard /></li>));
    
    return (
        <ul className="reviewUnitWrapper">
            <h1 className="page-tit" id="product-info-tit"><h1 className="check"></h1>리뷰</h1>
            {ReviewUnitList}
        </ul>
    )
};

export default reviewUnitList;
