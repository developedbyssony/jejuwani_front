import '../../css/input.css';
import Input from './input.jsx';

function input({rblogtit, rblogcon, UpdateBlogUserInfo}) {
    return (
        <div className="second-inputs">
            <div className="ublogtit"><strong>블로그 제목</strong><Input type={'text'} name={'blog-title'} ref={rblogtit} /></div>
            <div className="ublogtxt"><strong>블로그 설명</strong><Input type={'text'} name={'blog-contents'} ref={rblogcon} /></div>
            <div className="upload-btn-sec2">
            <button className="btn-primary btn-55" onClick={UpdateBlogUserInfo}>변경 사항 저장</button>
            </div>
        </div>
    )
}

export default input;