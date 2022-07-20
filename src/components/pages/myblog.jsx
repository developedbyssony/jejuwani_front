import { useState, useEffect } from 'react';
import '../../css/myBlog.css';
import BlogPost from '../cardUI/blogPost';

export default function myblog({ FileInput, ProfileInput, myPostList, userId}) {
    const [ blogCover, setBlogCover ] = useState(false);
    const [ blogProfile, setBlogProfile ] = useState(false);
    const [ blogCoverImg, setBlogCoverImg ] = useState({blogCoverImgName : null, blogCoverImgURL : null});
    const [ profileImg, setProfileImg ] = useState({profileImg : null, profileImgURL : null});
    const data = myPostList.entries();

    const uid = 'dkdlel';
    const nick = '넥슨컴퓨터박물관';

    const fileDelete =  blogCover => {
        setBlogCoverImg({
            blogCoverImgName : '', 
            blogCoverImgURL : ''
        });
        setBlogCover(!blogCover);
    }

    const onFileChange_cover = file => {
        let url = file.url;
        let urlSlice = url.slice(url.lastIndexOf(".") + 1).toLowerCase();
        if(!(urlSlice == "gif" ||urlSlice == "jpg" || urlSlice == "png")) {
            alert("gif, jpg, png 확장자 파일을 업로드해주세요.");
            return;
        }
        setBlogCover(!blogCover);
        console.log(file);
        setBlogCoverImg({
            blogCoverImgName : file.name, 
            blogCoverImgURL : file.url
        });
    };

    const onFileChange_profile = file => {
        let url = file.url;
        let urlSlice = url.slice(url.lastIndexOf(".") + 1).toLowerCase();
        if(!(urlSlice == "gif" ||urlSlice == "jpg" || urlSlice == "png")) {
            alert("gif, jpg, png 확장자 파일을 업로드해주세요.");
            return;
        }
        setBlogProfile(!blogProfile);
        setProfileImg({
            profileImg : file.name, 
            profileImgURL : file.url
        });
    };
        return (
            <div className="container-fluid">
               <div className="row">
                    <div className="col-12">
                        <div className="my-blog-page-wrapper">
                                <div className="uploadCoverSection">
                                {blogCover ? (
                                <div className="upload-blog-img-cover">
                                <p className="fileName">{blogCoverImg.blogCoverImgName}
                                <h1 className="i-delete" onClick={fileDelete}></h1>            
                                </p>                   
                                </div>) 
                                : (<FileInput name={'커버 사진을 업데이트해주세요 :)'} onFileChange={onFileChange_cover} style={{ position:'absolute', zIndex:'999' }} />)}
                                    <div className="my-blog-background-img">
                                    </div>
                                </div>
                                <div className="section">
                                <div className="my-blog-user-info">
                                <ProfileInput onFileChange={onFileChange_profile} style={{ position:'absolute', zIndex:'999' }} />
                                    <h1 className="text-style-24"><strong>{nick}({uid})</strong>님의 블로그입니다.</h1>
                                    <h5 className="blog-script">블로그 소개글을 입력해주세요.</h5>
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
                                        <BlogPost />
                                        <BlogPost />
                                        <BlogPost />
                                        <BlogPost />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
        )
}