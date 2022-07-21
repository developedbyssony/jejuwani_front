import { useEffect } from 'react';
import '../../css/productUnit.css';

function productUnit({item}) {
    useEffect(() => {
        console.log({item});
    },[]);

    return (
        <div className="productUnit-frame-wanner-special">
            <div className="main-blog-img-frame">
            <div className="productUnit-img-wanner-special">
            </div>
            </div>
            <div className="productUnit-contents-wanner-special">
                <div className="productUnit-contents-tit">

                    <p className="unit-tit text-style-13">{item.region} </p>
                    <p className="unit-tit text-style-24">{item.title}</p>
                </div>
                <div className="productUnit-contents-bottom">
                <div className="productUnit-contents-price">
                    <h1 className="unit-tit price-20">{(item.price * 1).toLocaleString()}원</h1>
                </div>
                <div className="productUnit-contents-like">
                    <i className="ic-heart">🧡</i>
                    <h1 className="unit-tit like-13">{item.like}</h1>
                </div>
                </div>
            </div>
        </div>
    )
}

export default productUnit;