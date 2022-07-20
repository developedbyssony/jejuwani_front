import axios from "axios";
import { useState, useRef } from 'react';
import '../../css/update.css';
import Input from '../tinyForm/input';


function update({serverURL}) {
    const uid = localStorage.getItem('authId');
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
                            <form className="blog-write-form" action="/" method="POST">
                                <div className="write-inputs">
                                <div className="first-inputs">
                                <div className="uid"><strong>아이디</strong> <Input type={'text'} placeholder={'n_uck'} name={'id'} /></div>
                                <div className="upass"><strong>비밀번호</strong><Input type={'password'} name={'password'} ref={rpwd} /></div>
                                <div className="umail"><strong>이메일</strong><Input type={'text'} placeholder={'n_uck@naver.com'} name={'email'} ref={remail}/></div>
                                <div className="uaddress"><strong>주소</strong><Input type={'text'} placeholder={'서울특별시 마포구 백범로 23'} name={'address'} ref={raddress}/></div>
                                <div className="unick"><strong>닉네임</strong><Input type={'text'} placeholder={'닉네임뭐하지'} name={'nick'} ref={rnick}/></div>
                                <div className="upload-btn-sec1">
                                    <button className="btn-outlined btn-55" onClick={DeleteUserInfo}>회원 탈퇴</button>
                                    <button className="btn-primary btn-55" onClick={UpdateUserInfo}>회원 정보 수정</button>
                            </div>
                                </div>
                                <div className="second-inputs">
                                <div className="ublogtit"><strong>블로그 제목</strong><Input type={'text'} placeholder={'n_uck님의 블로그입니다.'} name={'blog-title'} ref={rblogtit} /></div>
                                <div className="ublogtxt"><strong>블로그 설명</strong><Input type={'text'} placeholder={'소개글을 입력해주세요.'} name={'blog-contents'} ref={rblogcon} /></div>
                                <div className="upload-btn-sec2">
                                    <button className="btn-primary btn-55" onClick={UpdateBlogUserInfo}>변경 사항 저장</button>
                            </div>
                                </div>
                            </div>
                            </form>
                            <div className="section">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
        }

export default update;