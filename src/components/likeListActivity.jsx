import { useState, useEffect } from 'react';
import LikeUnit from './cardUI/likeCard';
import LikeList_empty from './cardUI/likeList_empty';

function productUnitList({onRemove, cart}) {
    const [ isItEmpty, confirmList ] = useState(false);
    useEffect(() => {
        const item = localStorage.getItem('likeState') ? JSON.parse(localStorage.getItem('likeState')): [];
        console.log(item);
        console.log(item.length);
        if(item.length === 0) {
            confirmList(true);
        } else {
            confirmList(false);
        }
    },[]);

    const category = "Activity";
    const item = localStorage.getItem('likeState') ? JSON.parse(localStorage.getItem('likeState')): [];

    return (
        <ul className="likeUnitwrapper">
            { isItEmpty ? (<LikeList_empty/>) : (<LikeUnit category={category} item={item} cart={cart}/>)}
        </ul>
    )
};

export default productUnitList;
