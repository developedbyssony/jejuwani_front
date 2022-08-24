/*
import CommentItem from './CommentItem';

const CommentList = ({ onEdit, onRemove, diaryList}) => {
    return (
    <div className="CommentList">
        <div>
            {CommentList.map((li) => (
                <DiaryItem key={li.id} {...li} onRemove={onRemove} onEdit={onEdit} /> 
                // diarylist는 ondelete를 사용하지는 않지만 
                // diaryitem에게 props를 내려주기 위해서 부모의 ondelete를 전달받고
                // props를 diaryitem에게 드릴링함
            ))}
        </div>
    </div>
    );
};

CommentList.defaultProps = {
    CommentList:[],
};

export default CommentList;
*/