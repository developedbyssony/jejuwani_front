import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/shopping/shopping-actions';
import ProductUnit from './cardUI/productUnitActivity';

function productUnitList({data}) {
    /*
    const [ item, setItem ] = [{
        category : '액티비티',
        region : '서귀포시',
        item : '돌고래 투어',
        price : '30000',
        likeLength : '333'
    }]
    */

    useEffect(() => {
        console.log({data});
    },[]);

    function addItem(index) {
        const dispatch = useDispatch();
        dispatch(addToCart(index));
    }

    const mainProductActivity = ['a','b','c','d','e','f','g','h','i']
    const mainProductActivityList = mainProductActivity.map((mainProductActivity, index) => (<li key={index}><ProductUnit item={data} addToCart={addItem}/></li>));
    
    return (
        <>
        <ul className="productUnitwrapper">
            {mainProductActivityList}
        </ul>
        <br />
        <ul className="productUnitwrapper">
            {mainProductActivityList}
    </ul>
    </>
    )
};

export default productUnitList;
