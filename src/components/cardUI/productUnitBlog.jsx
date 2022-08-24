import { useEffect } from 'react';
import { useHistory } from 'react-router';
import '../../css/productUnit.css';

function productUnit({item}) {
    const history = useHistory();
    useEffect(() => {
        console.log(item);
    },[]);

    return (
        <div className="wrap-css">
 <div className="productUnit-frame-wanner">
 <div className="productUnit-img-blog">
     <img src={item.imgSrc} alt="메인블로그유닛" style={{width:'250px', height:'230px', objectFit:'cover'}}/>
 </div>
 <div className="productUnit-contents">
     <div className="productUnit-contents-tit">
         {
                            item.category === 1
                            &&
                            <p className="tag-outline" id="comment-index">감성 제주</p>
                        }
                            {
                            item.category === 2
                            &&
                            <p className="tag-outline" id="comment-index">가족과 제주</p>
                            }
                            {
                            item.category === 3
                            &&
                            <p className="tag-outline" id="comment-index">익사이팅 제주</p>
                            }
                            {
                            item.category === 4
                            &&
                            <p className="tag-outline" id="comment-index">힐링 제주</p>
                            }
                            {
                            item.category === 5
                            &&
                            <p className="tag-outline" id="comment-index">찐맛 제주</p>
                            }
                            {
                            item.category === 6
                            &&
                            <p className="tag-outline" id="comment-index">내추럴 제주</p>
                            }
         <p className="unit-tit text-style-24" id="blog-tit" style={{fontWeight:'600'}}>{item.title}</p>
     </div>
         <div className="productUnit-contents-wanner-avatar">
            <img className="blog-page-avatar" src={`${process.env.PUBLIC_URL}${item.imgSrc}`} alt="블로그프로필" onClick={() => {history.push({pathname:"/yourblog"})}} />
        </div>
        <p className="unit-tit text-style-13" id="blog-main-nick"><strong>{item.nick}</strong>{item.uid}</p>
 </div>
</div>
</div>)}
export default productUnit;