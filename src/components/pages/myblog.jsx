import { useState, useEffect } from 'react';
import { isReadable } from 'stream';
import '../../css/myBlog.css';
import BlogPost from '../cardUI/blogPostMy';

export default function myblog({ FileInput, ProfileInput, blogData, userId}) {
    const [ myData, setMyData ] = useState([
    ]);
    /*
          {
            key : '',
            category : '',
            region : '',
            title : '',
            contents : '',
            fileName : '',
            fileURL : '',
        }
    */

    useEffect(() => {
        console.log(blogData);
        /*
        for (var pair of blogData) {
            setMyData(myData.concat(pair));
        }
        /*
        const initData = blogData.map((it) => {
            return {
                key : it.key, 
                category : it.category, 
                region : it.region,
                title : it.title,
                contents : it.contents,
                fileName : it.fileName,
                created_date : it.created_date,
            }
        })
        console.log(initData);
        setMyData(initData); 
        /*
        setMyData({
            key : blogData.key, 
            category : blogData.category, 
            region :blogData.region, 
            title : blogData.title,
            contents : blogData.contents,
            fileName : blogData.fileName,
            created_date : blogData.created_date,
        });*/

        /*
        console.log(blogData.entries().next()); // {value: Array(2), done: false}done: falsevalue: (2) [0, FormData][[Prototype]]: Object

        /*
        for (var pair of blogData) {
                console.log(pair.get('key'));
                console.log(pair.keys().next()); // {done: false, value: 'key'}
                console.log(pair.values().next()); // {done: false, value: '65cb15f-1230-fb2c-af34-ac135521e7'}
        }
        console.log(blogData.keys().next()); // {value: 0, done: false}
        console.log(blogData.values().next()); // {value: 0, done: false}done
        console.log(blogData.entries().next()); // {value: FormData, done: false}
        
        /*
        while(true) {
            let iteratorResult = blogData.values().next();
            if ( iteratorResult.done === false ) break;
            let v = iteratorResult.values();
            console.log(v); // 4 5 6 이 차례대로 console에 찍힘
          }
        */
        /*
        for (var pair of myPostList.keys()) {
                    console.log(pair);
                    }
                */
    },[])

    const [ blogCover, setBlogCover ] = useState(false);
    const [ blogProfile, setBlogProfile ] = useState(false);
    const [ blogCoverImg, setBlogCoverImg ] = useState({blogCoverImgName : null, blogCoverImgURL : null});
    const [ profileImg, setProfileImg ] = useState({profileImg : null, profileImgURL : null});



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
        console.log(myData);
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
                                    {/*
                                    <div className="my-blog-user-info-bottom">
                                        <div className="my-blog-user-info-follower">
                                        <dt>Following</dt>
                                        <dd>0</dd>
                                        </div>
                                        <div className="my-blog-user-info-follower">
                                        <dt>Follower</dt>
                                        <dd>0</dd>
                                        </div>
                                    </div>*/}
                                    <div className="my-blog-posts">
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