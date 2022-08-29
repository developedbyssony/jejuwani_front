import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Modal from "../modals/modal.jsx"; 
import styled from 'styled-components';

const Td = styled.td`
display:block;
padding:0 5px;
align-items:center;
white-space:nowrap;
width:200px;
height:100%;
overflow:hidden;
text-overflow:ellipsis;
`;

const Tdd = styled.td`
display:block;
padding-left:40px;
align-items:center;
white-space:nowrap;
width:340px;
height:100%;
overflow:hidden;
text-overflow:ellipsis;
`;
const posts = ({ posts, loading, reverse }) => {
    const [ modalOpen, setModalOpen] = useState();

    const modalClose = () => {
      setModalOpen(!modalOpen);
    }

    const history = useHistory();
    const p = posts.filter(n => n.id < 100);
        return(
        <>
        { loading && <div> loading ... </div> }
                { posts.map(function(post,index) {
                        const view_url = `/detail/${post.id}`;
                        return(
                        <tr key={index}>
                        <td>{post.id}</td>
                        <td value={post.id}><Tdd onClick={()=> {history.push({
                            pathname: view_url,
                            state: {post:post}
                        })}}>{post.title}</Tdd></td>                        
                        <td><Td>{post.region}</Td></td>
              
                        <td>{post.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
                        <td>{post.hit}</td>
                        <td><div id={index} className="heartNotActive" onClick={reverse}></div></td>
                        <td><div className="tag-outline" onClick={modalClose}>예약하기</div>
                        {
                        modalOpen && <Modal
                        modalClose={modalClose}
                        id={post.id}
                        title={post.title}
                        region={post.region}
                        price={post.price}
                        />
                        }</td>
                        </tr>
                )
            }) }
        </>
    );
};

export default posts;