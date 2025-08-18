import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components';

const Td = styled.td`
    display:block;
    padding:0 5px;
    align-items:center;
    white-space:nowrap;
    height:100%;
    overflow:hidden;
    text-overflow:ellipsis;
`;

const Tdd = styled.td`
    display:block;
    align-items:center;
    white-space:nowrap;
    width:350px;
    height:100%;
    overflow:hidden;
    text-overflow:ellipsis;
`;

const Tg = styled.td`
    display:block;
    width:200px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    padding-left:10px;
`;

const posts = ({ posts, reverse, onIncrease}) => {
    /*
    const handleIncrement = (e) => {
        console.log('증가');
        console.log(e.target.value);
        onIncrease(e.target.value);
        for (var i of productItems) {
            onIncrease(i.hit);
        }
        onIncrease(i);
      };
      */
      const history = useHistory();
    const p = posts.filter(n => n.id < 101);
        return(
        <>
            {   
                p.map(function(post,index) {
                        const view_url = `/detail2/${post.id}`;
                        const postId = post.id;
                        const postHit = post.hit;
                        return(
                        <tr key={index}>
                        <td>{post.id}</td>
                        <td value={post.id}><Tdd onClick={()=> {history.push({
                            pathname: view_url,
                            state: {post:post}
                        })}}>{post.title}</Tdd></td>
                        <td><Td>{post.region}</Td></td>
                        <td><Tg>{post.tag}</Tg></td>
                        <td>{post.regdate}</td>
                        <td>{post.hit}</td>
                        <td><div id={index} className="heartNotActive" onClick={reverse}></div></td>
                        </tr>)})
            }
        </>
    );
};

export default posts;