import { useState, useEffect } from 'react';
import '../../css/myBlog.css';
import BlogPost from '../cardUI/blogPostMy';
import BlogProfile from 'components/blog/blogProfile';
import { useLocation } from "react-router-dom"

export default function yourblog({blogData, userId}) {
    const location = useLocation();
    const [ myData, setMyData ] = useState([location.state.post]);

    useEffect(() => {
        for (var pair of blogData) {
            setMyData(myData.concat(pair));
        }},[myData]);

    const uid = location.state.post.uid;
    const nick = location.state.post.nick;
        return (
            <div className="container-fluid">
               <div className="row">
                    <div className="col-12">
                        <div className="my-blog-page-wrapper">
                                <div className="uploadCoverSection-your">
                                    <div className="upload-blog-img-cover">
                                    <h5 className="blog-script">🐶 혼저옵서예 🐶</h5>
                                    {/*<img src={location.state.post.imgSrc} alt="액티비티이미지" id="img-activity" style={{width:'670px', height:'670px', objectFit:'cover'}}/>*/}
                                    </div>
                                </div>
                                <div className="section">
                                <div className="my-blog-user-info">
                                    <BlogProfile data={location.state.post.imgSrc}/>
                                    <h1 className="text-style-24"><strong>{nick}{uid}</strong>님의 블로그입니다.</h1>
                                    {/*}
                                    <div className="my-blog-user-info-bottom">
                                        <div className="my-blog-user-info-follower">
                                        <dt>Following</dt>
                                        <dd>0</dd>
                                        </div>
                                        <div className="my-blog-user-info-follower">
                                        <dt>Follower</dt>
                                        <dd>0</dd>
                                        </div>
                                    </div>
                                    */}
                                    <div className="my-blog-posts">
                                        <BlogPost myPost={blogData}/>
                                        <BlogPost myPost={blogData}/>
                                        <BlogPost myPost={blogData}/>
                                        <BlogPost myPost={blogData}/>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
        )
}