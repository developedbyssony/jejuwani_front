import { useState, useEffect } from 'react';
import '../../css/myBlog.css';
import BlogPost from '../cardUI/blogPostMy';
import BlogProfile from 'components/blog/blogProfile';

export default function yourblog({blogData, userId}) {
    const [ myData, setMyData ] = useState([
    ]);

    useEffect(() => {
        for (var pair of blogData) {
            setMyData(myData.concat(pair));
        }},[myData]);

    const uid = 'autumn';
    const nick = '가을이네';
        return (
            <div className="container-fluid">
               <div className="row">
                    <div className="col-12">
                        <div className="my-blog-page-wrapper">
                                <div className="uploadCoverSection-your">
                                    <div className="upload-blog-img-cover">
                                    </div>
                                </div>
                                <div className="section">
                                <div className="my-blog-user-info">
                                    <BlogProfile />
                                    <h1 className="text-style-24"><strong>{nick}({uid})</strong>님의 블로그입니다.</h1>
                                    <h5 className="blog-script">🐶 애견 동반 가능한 제주도 숙소 🐶</h5>
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