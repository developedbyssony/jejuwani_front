import { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from "../modals/modal.jsx"; 

const posts = ({ posts, loading, reverse }) => {
    
    const [ modalOpen, setModalOpen] = useState();

    const modalClose = () => {
      setModalOpen(!modalOpen);
    }
        return(
        <>
        { loading && <div> loading ... </div> }
            {
                posts.map((post,index) => (
                        <tr key={index}>
                        <td>{post.id}</td>
                        <td><Link to="/detail">{post.title}</Link></td>
                        <td>{post.region}</td>
                        <td>{post.price}</td>
                        <td>{post.regdate}</td>
                        <td>{post.hit}</td>
                        <td><div id={index} className="heartNotActive" onClick={reverse}></div></td>
                        <td><div className="tag-outline" onClick={modalClose}>예약하기</div>
                        {
                        modalOpen && <Modal
                        modalClose={modalClose}
                        title={post.title}
                        region={post.region}
                        price={post.price}
                        />
                        }</td>
                        </tr>
                ))
            }
        </>
    );
};

export default posts;