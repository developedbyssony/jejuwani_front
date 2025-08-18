import axios from "axios";
import { useState, useRef } from 'react';
import '../../css/update.css';
import Input from '../tinyForm/input';
import BlogInput from '../tinyForm/blogInput';

function update({serverURL}) {
    /* 로컬스토리지에 저장해둔 토큰에서 아이디와 블로그 유저 여부 변수처리  */
    const uid = localStorage.getItem('authId');
    const blogId = localStorage.getItem('blogId');

    const rpwd = useRef();
    const remail = useRef();
    const raddress = useRef();
    const rnick= useRef();
    const rblogtit = useRef();
    const rblogcon = useRef();

    const [ userState, setState ] = useState({
        pass : "",
        email:"",
        address: "",
        nickname: "",
    }); 

    const [ blogState, blogsetState ] = useState({
        blogTit : "",
        blogContents:"",
    }); 

    /* 백엔드 통신 - 탈퇴 로직 */
    const DeleteUserInfo = event => {
        event.preventDefault();
        axios.delete(`${serverURL}/user/${uid}`).then(res => {
            console.log(res);
            location.replace('http://localhost:3000/');
        }).catch(error => {
            console.log('error');
        }).then(() => {
            console.log('delete user');
        })} 

    /* 백엔드 통신 - 블로그 유저 생성 로직 */
    const setBlogUser = event => {
        event.preventDefault();
        /* 블로그 유저 생성 구문 
        axios.post(``).then(res => {
            console.log(res);
        }).catch(error => {
            console.log('error');
        }).then(() => {
            console.log('post data');
        }) */
    } 
    
    /* 백엔드 통신 - 유저 정보 업데이트 로직 */
    const UpdateUserInfo = event => {
            event.preventDefault();
            setState({
                pass : rpwd.current.value || '',
                email: remail.current.value || '',
                address: raddress.current.value || '',
                nickname: rnick.current.value || '',
            });

            axios.put(`${serverURL}/user/${uid}`,JSON.stringify(userState)).then(res => {
                console.log(res);
                location.replace('http://localhost:3000/');
            }).catch(error => {
                console.log('error');
            }).then(() => {
                console.log('update user info');
            })} 

    /* 백엔드 통신 - 블로그 유저 정보 업데이트 로직 */
    const UpdateBlogUserInfo = event => {
        event.preventDefault();
        blogsetState({
            blogTit : rblogtit.current.value || '',
            blogContents: rblogcon.current.value || '',
        });
        axios.put(`${serverURL}/user/${uid}`,JSON.stringify(blogState)).then(res => {
            console.log(res);
            location.replace('http://localhost:3000/');
        }).catch(error => {
            console.log('error');
        }).then(() => {
            console.log('update user info - blog user');
        })
    }
        return (
            <div className="container-fluid">
               <div className="row">
                    <div className="col-12">
                        <div className="section">
                            <h1 className="page-tit">회원 정보 수정</h1>
                            <div className="update-sec">
                            <div className="update-sec-first">
                                <span className="signup-title update" id="update-first-tit">정보 수정</span>
                                <span className="signup-title update">블로그 설정</span>
                            </div>
                            <div className="update-sec-last">
                            <form className="blog-write-form" method="POST">
                                <div className="write-inputs">
                                <div className="first-inputs">
                                <div className="uid"><strong>아이디</strong> <Input type={'text'} name={'id'} /></div>
                                <div className="upass"><strong>비밀번호</strong><Input type={'password'} name={'password'} ref={rpwd} /></div>
                                <div className="umail"><strong>이메일</strong><Input type={'text'} name={'email'} ref={remail}/></div>
                                <div className="uaddress"><strong>주소</strong><Input type={'text'} name={'address'} ref={raddress}/></div>
                                <div className="unick"><strong>닉네임</strong><Input type={'text'} name={'nick'} ref={rnick}/></div>
                                <div className="upload-btn-sec1">
                                    <button className="btn-outlined btn-55" onClick={DeleteUserInfo}>회원 탈퇴</button>
                                    <button className="btn-primary btn-55" onClick={UpdateUserInfo}>회원 정보 수정</button>
                                </div>
                                </div>
                                </div>
                            </form>
                                </div>
                                </div>
                                <BlogInput rblogtit={rblogtit} rblogcon={rblogcon} UpdateBlogUserInfo={UpdateBlogUserInfo} />
                                </div>
                                {/*blogId ? (<BlogInput rblogtit={rblogtit} rblogcon={rblogcon} UpdateBlogUserInfo={UpdateBlogUserInfo} />) : (<button className="btn-primary btn-55" id="blogCreate" onClick={setBlogUser}>블로그 만들기</button>)*/}
                                </div>
                                
                                </div>
                                </div>
        )
    }

export default update;