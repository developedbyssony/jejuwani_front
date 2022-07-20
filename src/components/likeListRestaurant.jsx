import React from 'react';
import LikeUnit from './cardUI/likeCard';

function productUnitList() {
    const myProductRestaurant = ['a','b']
    const myProductRestaurantList = myProductRestaurant.map((myProductRestaurant, index) => (<li key={index}><LikeUnit/></li>));
    
    return (
        <ul className="likeUnitwrapper">
            {myProductRestaurantList}
        </ul>
    )
};

export default productUnitList;