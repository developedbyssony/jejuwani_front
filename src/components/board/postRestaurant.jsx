import { useState } from 'react';
import { Link } from "react-router-dom";

const posts = ({ posts, loading, reverse}) => {
        return(
        <>
        { loading && <div> loading ... </div>}
            {
                posts.map((post,index) => (
                        <tr key={index}>
                        <td>{post.id}</td>
                        <td><Link to="/detail2">{post.title}</Link></td>
                        <td>{post.region}</td>
                        <td>{post.price}</td>
                        <td>{post.regdate}</td>
                        <td>{post.hit}</td>
                        <td><div id={index} className="heartNotActive" onClick={reverse}></div></td>
                        </tr>
                ))
            }
        </>
    );
};

export default posts;