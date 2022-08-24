/*
import { useState, useRef } from "react";

const CommentItem = ({    
    onEdit,
    onRemove,
    id, 
    author, 
    content, 
    emotion, 
    created_date,
    }) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent,setLocalContent] = useState(content);
    const localContentInput = useRef();

    const handleRemove = () => {
        if(window.confirm(`댓글을 정말 삭제하시겠습니까?`)) {
            onRemove(id); 
        }
    };

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };

    const handleEdit = () => {
        if(localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`댓글을 수정하시겠습니까?`)) {
            onEdit(id,localContent);
            toggleIsEdit();
        }
    };

    return (
    <div className="CommentItem">
        <div className="info">
            <span className="author_info">
                <strong className="tit">작성자 :</strong> {author} | <strong className="tit">어땠어요</strong> : {emotion}
            </span>
            <br />
            <span className="date">
                {new Date(created_date).toLocaleString()}
            </span>
        </div>
        <div className="content">
            {isEdit ? (
            <>
                <textarea 
                ref={localContentInput}
                value={localContent} 
                onChange={(e) => setLocalContent(e.target.value)} />
            </>
            ) : (
            <>{content}</>
            )}
        </div>


        {isEdit ? <>
            <button onClick={handleQuitEdit}>수정 취소</button>
            <button onClick={handleEdit}>수정 완료</button>
        </> : 
        <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
        </> }
        
    </div>
    );
};

export default CommentItem;
*/