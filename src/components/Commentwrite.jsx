import React, { useState, useRef } from 'react';
import '../css/comment.css';

function Commentwrite() {
    const authorInput = useRef(); // 반환값 상수에 담아줌
    const contentInput = useRef();

    const [state, setState] = useState({
        author:"",
        content: "",
        rating: 0,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };  

    const handleSubmit = () => {
        if(state.content.length < 5) {
            contentInput.current.focus();
            alert('본문은 5자 이상 입력해주세요.');
            return;
        }
        if(state.rating < 1) {
            alert('5점 만점에 몇점?! 어떘어요?');
            return;
        }
        setState({
            author:"",
            content:"",
            rating:"",
        });
        console.log(state);
        alert('저장 성공');
        
        /* 백엔드 통신 함수 (추가)
       const writeComment = async() => {
        axios.post(`${serverURL}/pcomment`, {
            headers: {
              'Content-Type': 'application/json',}}).then(res => {
                console.log("댓글 추기"); 
                setState(res.json());
            }).catch(ex =>{
                console.log("requset fail");
                }).finally(()=>{console.log("request end")});
        }
    */

    };

    return (
    <div className="reviewEditor">
    <div>
    <div className="commentBox">
        <textarea
            className="reviewWrite"
            ref={contentInput}
            name="content" 
            value={state.content} 
            onChange={handleChangeState}
            placeholder="자세하고 솔직하게 작성해주세요!"
            />
    </div>
    <div className="commentSubmit">
    <div>
        <select 
            name='rating'
            value={state.rating} 
            onChange={handleChangeState}>
            <option value="0" selected="selected">
            별점 평가
            </option>    
            <option value="1">
            ⭐
            </option>
            <option value="2">
            ⭐⭐
            </option>
            <option value="3">
            ⭐⭐⭐
            </option>
            <option value="4">
            ⭐⭐⭐⭐
            </option>
            <option value="5">
            ⭐⭐⭐⭐⭐
            </option>
        </select>
    </div>
    <div>
        <button type="button" className="btn-primary btn-55" onClick={handleSubmit} id="reviewSubmit">댓글 달기</button>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Commentwrite;