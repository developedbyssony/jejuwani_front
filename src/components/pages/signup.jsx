import axios from "axios";
import { useState, useRef } from 'react';
import '../../css/signup.css';

function signup({serverURL}) {
    const rid = useRef();
    const rname = useRef();
    const rpwd = useRef();
    const rgender = useRef();
    const remail = useRef();
    const rnick = useRef();
    const rrole = useRef();

    const [ gender, setGender ] = useState("");
    const [ userState, setUserState ] = useState({
        id : "",
        nick: "",
        name : "",
        pass : "",
        gender : "",
        email:"",
        role:"",
    }); 


    const handleInputId = (e) => {
        checkIdValidation();
    }

    const handleInputPw = (e) => {
        checkPwValidation();
    }

    const handleInputName = (e) => {
        checkNameValidation();
    }

    const handleInputEmail = (e) => {
        checkEmailValidation();
    }
    
    
    const handleInputNick = (e) => {
        checkNickValidation();
    }
    

    const checkIdValidation = function () {
        if (rid.current.value.length === 0) {
          rid.current.style.border = "1px solid red";
        } else if (rid.current.value.length > 1) {
            rid.current.style.border = "1px solid #ddd";
        }
        }

    const checkPwValidation = function () {
            if (rpwd.current.value.length === 0) {
              rpwd.current.style.border = "1px solid red";
            } else if (rid.current.value.length > 1) {
                rpwd.current.style.border = "1px solid #ddd";
            }
            }


    const checkNameValidation = function () {
                if (rname.current.value.length === 0) {
                  console.log('이 사람 아무것도 안썼음');
                  rname.current.style.border = "1px solid red";
                } else if (rname.current.value.length > 1) {
                    console.log('이 사람 쓰고있음');
                  rname.current.style.border = "1px solid #ddd";
                }
                }

    const checkEmailValidation = function () {
                    if (remail.current.value.length === 0) {
                      remail.current.style.border = "1px solid red";
                    } else if (rname.current.value.length > 1) {
                        remail.current.style.border = "1px solid #ddd";
                    }
                    }

    const checkNickValidation = function () {
                        if (rnick.current.value.length === 0) {
                          rnick.current.style.border = "1px solid red";
                        } else if (rname.current.value.length > 1) {
                            rnick.current.style.border = "1px solid #ddd";
                        }
                        }

    const submitUserInfo = event => {
        event.preventDefault();
        setUserState({
            id : rid.current.value || '',
            nick: rnick.current.value || '',
            name : rname.current.value || '',
            pass : rpwd.current.value || '',
            gender : gender || '',
            email: remail.current.value || '',
            role: rrole.current.value || '',
        });
        console.log(userState);
        if (gender === "") {
            alert('성별을 선택해주세요.')
        } else {
            if (rrole.current.value === "") {
                alert('추가 선택 항목을 선택해주세요.')
            } else {
                if(rid.current.value.length >1,rnick.current.value.length >2, remail.current.value.length >1, rpwd.current.value.length >8,rname.current.value.length >1) {
                alert('필수 정보를 모두 입력하셨습니다. 가입하시겠습니까?')
                axios.post(`${serverURL}/user`,JSON.stringify(userState)).then(res => {
                    console.log(res);
                    location.replace('http://localhost:3000/');
                }).catch(error => {
                    console.log('error');
                }).then(() => {
                    console.log('signup post');
                })} else {
                alert('필수 정보를 모두 입력해주세요');
                }
            }
        }
    }

    const handleClickRidio1 = (e) => {
        console.log(e.target.value);
        setGender('1');
    }
    
    const handleClickRidio2 = (e) => {
        console.log(e.target.value);
        setGender('2');
    }
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="section">
                <h1 className="page-tit">회원가입</h1>
                <form action="" className="signup-form">
                    <span className="signup-title">이용약관</span>
                    <div className="rule-sign-up-box">
                        <div className="jejuwn-rule-img">
                        </div>
                        <p className="rule-txt">
                        <strong>회원 정의</strong> 
                        <p><span>용어 정의 |</span> 회원, 비회원, 이용자, 게시물, 매장, 제 3자</p>
                        <ul>
                        <li>회원 : "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자, 제주완니가 제공하는 "서비스"를 이용하는 사용자</li>
                        <li>비회원 : 회원가입 없이 "회사"가 제공하는 "서비스"를 이용하는 자</li>
                        <li>이용자 : "서비스"를 이용하는 자를 말하며, 회원과 비회원을 모두 포함</li>
                        <li>게시물 : "회원"이 서비스를 이용함에 있어 "서비스"상에 게시한 부호, 문자, 음성, 음향, 형태의 글, 사진, 동영상 및 각종 파일과 링크 들을 의미</li>
                        <li>매장 : 회사가 제공하는 서비스를 이용해 정보를 제공하는 주체를 의미 회사의 대리인이나 피고용자로 간주되지 않음</li>
                        <li>제 3자 : "이용자"가 "서비스"를 이용하며 만나는 "매장" 및 또 다른 "이용자" 등을 의미</li>
                        </ul>
                        <strong>회원 가입 정책 (일반)</strong>

                        <p>약관 동의 | 이용 약관 동의(필수 동의), 개인정보 수집 이용 동의(필수 동의), 이벤트 혜택 및 광고성 정보 수신 동의(필수 동의)
                        가입 양식 작성 | 이메일 계정 등록, 비밀번호 등록, 닉네임 생성</p>
                        <ul>
                        <li>이메일 계정 등록 : 이메일 형식으로 이메일 계정 등록</li>
                        <li>비밀번호 등록 : 숫자, 영문, 특수 문자 8자 ~ 16자 입력, 비밀번호 확인 및 불일치 시 회원 가입 불가능</li>
                        <li>닉네임 생성 : 10자 이내의 닉네임 입력</li>
                        </ul>
                        <strong>회원 가입 정책 (소셜)</strong>
                        <ul>
                        <p>외부 API 등록 | 외부  API 소셜 계정 등록
                        외부  API 소셜 계정 등록 : 소셜 등록 가능 계정 - 카카오/ 페이스북 / 네이버</p>
                        </ul>
                        </p>
                    </div>
                    <span className="signup-title">필수정보</span>
                        <span className="signup-input-tit">아이디</span>
                        <input type="text" className="" placeholder="아이디" id="id" ref={rid} onChange={handleInputId}/>
                        <span className="signup-input-tit">성명</span>
                        <input type="text" className="" placeholder="이름을 적어주세요." id="name" ref={rname} onChange={handleInputName} />
                        <span className="signup-input-tit">비밀번호</span>
                        <input type="password" className="pass" placeholder="영문,숫자 포함 8자 이상의 비밀번호" ref={rpwd} onChange={handleInputPw}/>
                        <span className="signup-input-tit">성별</span>
                        <div className="gender-checkBox">
                            <div className="jeju-man-icon">
                            <h1 className="ic-man"></h1>
                            <p><input type="radio" name="gender" id="check-label" value="1" checked={gender === "1"} onClick={handleClickRidio1} ref={rgender}></input></p>
                            <div className="radio-txt">남자입니다.</div>
                            </div>
                            <div className="jeju-woman-icon">
                            <h1 className="ic-woman"></h1>
                            <p><input type="radio" name="gender" id="check-label" value="2" checked={gender === "2"} onClick={handleClickRidio2} ref={rgender}></input></p>
                            <div className="radio-txt">여자입니다.</div>
                            </div>
                        </div>
                        <div className="signup-form-bottom">
                        <span className="signup-input-tit">이메일</span>
                        <input type="text" className="" placeholder="이메일" id="email" ref={remail} onChange={handleInputEmail}/>
                        <span className="signup-input-tit">닉네임</span>
                        <input type="text" className="" placeholder="별명 (2자~5자)" id="nick" ref={rnick} onChange={handleInputNick}/>
                        <div className="order-inputs" id="signUp-input">
                            <div className="select-group is-active">
                            <select className="form-select" id="mandatory-select" required ref={rrole}>
                            <option value="">추가 선택 항목</option>
                            <option value="1">사용자</option>
                            <option value="2">관리자</option>
                            </select>
                            </div>
                        </div>
                    <div className="section-optional-info" id="signup-tit-optional">
                    <span className="signup-title" >선택정보</span>
                        <span className="signup-input-tit">전화번호</span>  
                        <div className="tel-box">
                            <input type="tel" className="phone" />
                        </div>
                        <span className="signup-input-tit">연령</span>
                        <input type="text" className="age" />
                        </div>
                    </div>
                        <input type="submit" className="btn-secondary btn-55" value="회원 가입" id="signUpbtn" onClick={submitUserInfo}></input>
                </form>
                </div>
                </div>
                </div>
                </div>
         );
    }

export default signup;