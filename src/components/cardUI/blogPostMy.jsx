import { useEffect } from 'react';
import '../../css/blogPost.css';

export default function blogPost({myPost,yourPost}) {
    useEffect(() => {
        console.log(myPost);
    },[]);

    return (
        <>
            <div className="blog-post-frame-my">
                <div className="blog-post-left">
               </div>
               <div className="blog-post-right">
               <p>{myPost.title}</p>
                <div className="user-new-post-contents">
                    <p>
                    {myPost.contents}
                    </p>
                </div>
                </div>
            </div>
        </>
        )
}