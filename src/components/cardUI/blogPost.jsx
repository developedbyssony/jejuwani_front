import React from 'react';
import '../../css/blogPost.css';
/*
key,
category,
region,
title,
contents,
fileName,
fileURL,
created_date,
id:dataId.current
*/
export default function blogPost({myPost,yourPost}) {
    return (
        <div>
        <div className="blog-post-frame">
                <div className="blog-post-left">
               <div className="blog-user-profile-img">
                    <img src={myPost.imgSrc} alt="블로그유닛"  style={{width:'60px', height:'60px', objectFit:'cover'}} />
               </div>
               {
                            myPost.category === 1
                            &&
                            <p className="tag-outline" id="comment-index">감성 제주  |   <p className="post-nick">{myPost.nick}{myPost.uid}</p></p>
                        }
                            {
                            myPost.category === 2
                            &&
                            <p className="tag-outline" id="comment-index">가족과 제주  |   <p className="post-nick">{myPost.nick}{myPost.uid}</p></p>
                            }
                            {
                            myPost.category === 3
                            &&
                            <p className="tag-outline" id="comment-index">익사이팅 제주  |   <p className="post-nick">{myPost.nick}{myPost.uid}</p></p>
                            }
                            {
                            myPost.category === 4
                            &&
                            <p className="tag-outline" id="comment-index">힐링 제주  |   <p className="post-nick">{myPost.nick}{myPost.uid}</p></p>
                            }
                            {
                            myPost.category === 5
                            &&
                            <p className="tag-outline" id="comment-index">찐맛 제주  |   <p className="post-nick">{myPost.nick}{myPost.uid}</p></p>
                            }
                            {
                            myPost.category === 6
                            &&
                            <p className="tag-outline" id="comment-index">내추럴 제주  |   <p className="post-nick">{myPost.nick}{myPost.uid}</p></p>
                            }
               </div>
               <div className="blog-post-right">
                <div className="user-new-post-contents">
                    <p>
                    </p>
                </div>
                </div>
        </div>
        </div>
        )
}