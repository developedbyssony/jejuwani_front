import { useState, useEffect } from 'react';
import LikeUnit from './cardUI/likeCard_restaurant';
import LikeList_empty from './cardUI/likeList_empty';

function productUnitList({onRemove}) {
    const [ isItEmpty, confirmList ] = useState(false);
    useEffect(() => {
        const item = localStorage.getItem('likeState2') ? JSON.parse(localStorage.getItem('likeState2')): [];
        console.log(item);
        console.log(item.length);
        if(item.length === 0) {
            confirmList(true);
        } else {
            confirmList(false);
        }
    },[]);

    const category = "Restaurant";
    const item = localStorage.getItem('likeState2') ? JSON.parse(localStorage.getItem('likeState2')): [];

    return (
        <ul className="likeUnitwrapper">
            { isItEmpty ? (<LikeList_empty/>) : (<LikeUnit category={category} item={item}/>)}
        </ul>
    )
};

export default productUnitList;