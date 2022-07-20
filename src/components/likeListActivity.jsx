import React from 'react';
import LikeUnit from './cardUI/likeCard';

function productUnitList() {
    const myProductActivity = ['a','b','c','d','e']
    const myProductActivityList = myProductActivity.map((myProductActivity, index) => (<li key={index}><LikeUnit/></li>));
    
    return (
        <ul className="likeUnitwrapper">
            {myProductActivityList}
        </ul>
    )
};

export default productUnitList;
