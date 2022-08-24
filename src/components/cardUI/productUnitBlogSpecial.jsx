import { useEffect } from 'react';
import '../../css/productUnit.css';

function productUnit({item}) {
    useEffect(() => {
        console.log({item});
    },[]);

    return (
        <div className="productUnit-frame-wanner-special">
            <div className="main-blog-img-frame">
            <img className="productUnit-img-wanner-special" src={`${process.env.PUBLIC_URL}${item.imgSrc}`} alt="블로그썸네일" onClick={() => {history.push({pathname:"/yourblog"})}} />
            </div>
            <div className="productUnit-contents-wanner-special">
                <div className="productUnit-contents-tit">
                    <p className="unit-tit text-style-13">{item.title}</p>
                </div>
                <div className="productUnit-contents-bottom">
                <img className="blog-page-avatar" src={`${process.env.PUBLIC_URL}${item.imgSrc}`} alt="블로그프로필" onClick={() => {history.push({pathname:"/yourblog"})}} />
                <p className="unit-tit text-style-13"><strong>{item.nick}</strong>{item.uid}</p>
                </div>
                <div className="productUnit-contents-like">
                    <h1 className="unit-tit like-13"></h1>
                </div>
                </div>
        </div>
    )
}

export default productUnit;