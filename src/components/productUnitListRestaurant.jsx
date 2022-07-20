import React from 'react';
import ProductUnit from './cardUI/productUnitRestaurantMap';

function productUnitList({map}) {
    const mainProductRestaurant = ['a','b','c','d','e','f','g','h','i']
    const mainProductRestaurantList = mainProductRestaurant.map((mainProductRestaurant, index) => (<li key={index}><ProductUnit map={map}/></li>));
    
    return (
        <>
        <ul className="productUnitwrapper">
            {mainProductRestaurantList}
        </ul>
        <br />
        <ul className="productUnitwrapper">
            {mainProductRestaurantList}
        </ul>
        </>
    )
};

export default productUnitList;
