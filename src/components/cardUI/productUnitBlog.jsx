import { useEffect } from 'react';
import '../../css/productUnit.css';

function productUnit({item}) {
    useEffect(() => {
        console.log({item});
    },[]);

    return (
        <div className="productUnit-frame-wanner">
            <div className="productUnit-img-wanner">
            </div>
            <div className="productUnit-contents-wanner">
                <div className="productUnit-contents-tit">
                    <p className="unit-tit text-style-13">제목제목제목제목제목</p>
                </div>
                <div className="productUnit-contents-bottom">
                <div className="blog-page-avatar"></div>
                <p className="unit-tit text-style-13"><strong>닉네임</strong></p>
                </div>
                <div className="productUnit-contents-like">
                    <h1 className="unit-tit like-13"></h1>
                </div>
                </div>
            </div>
    )
}

export default productUnit;