import { useState, useRef, useEffect } from 'react';
import axios from "axios";
import '../../css/login.css';
import naverLogo from '../../css/assets/naverLogo.png';

function login({loginCallBack, serverURL}) {
    const idtag = useRef();
    const pwtag = useRef();

    useEffect(() => {
        window.addEventListener('load', function() {
            idtag.current.focus();
            console.log(idtag.current.focus());            
        })
    },[]);

    const [ id, setId ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ login, setLogin ] = useState(false);

    const handleInputId = (e) => {
        console.log({loginCallBack});
        setId(e.target.value)
        console.log(id);
        checkIdValidation();
    }
 
    const handleInputPw = (e) => {
        console.log({loginCallBack});
        setPwd(e.target.value)
        console.log(pwd);
        checkPwValidation();
    }

    const checkIdValidation = function () {
        if (idtag.current.value.length === 0) {
          idtag.current.style.borderBottom = "1px solid red";
        } else if (idtag.current.value.length > 1) {
            idtag.current.style.borderBottom = "1px solid #ddd";
        }
        }

    const checkPwValidation = function () {
    if(pwtag.current.value.length === 0) {
      pwtag.current.style.borderBottom  = "1px solid red";
    } else if (pwtag.current.value.length > 1) {
        idtag.current.style.borderBottom = "1px solid #ddd";
      }
    }

    function loginClick(e) {
        console.log(id);
        console.log(pwd);
        console.log('submit 버튼 클릭')
        e.preventDefault();

        if (idtag.current.value.length === 0) {
            alert('아이디를 입력해주세요.')
          } else if (idtag.current.value.length > 1) {
            if (id === 'n_uck') {
                if (pwd == '1324') {
                    console.log('로그인 완료입니다!');
                    try{
                    let data = {id: id, password : pwd};
                    
                    axios.post(`${serverURL}/auth/login` ,JSON.stringify(data), {
                    headers: {
                    "Content-Type": `application/json`,
                    }}).then(res =>{
                    console.log("===registerSuccessfulLoginForJwt===");

                    const token = res.data;
                    console.log("res.data.accessToken : " + token);

                    localStorage.setItem('token',token);
                    localStorage.setItem('authId',id);

                    setupAxiosInterceptors(createJWTToken(token)); 
                    setupAxiosInterceptors();

                    axios.defaults.headers.common['Authorization'] = 'Bearer' + token; 
                    props.loginCallBack(true);
                    props.history.push("/");
                  
            })
            .catch(ex=>{
                console.log("login requset fail : " + ex);
            })
            .finally(()=>{console.log("login request end")});
        }catch(e){
            console.log(e);
        }  
                localStorage.setItem('token','a');
                localStorage.setItem('authId','b');
                    location.replace('http://localhost:3000/');
                } else {
                    if(pwtag.current.value.length === 0) {
                        alert('비밀번호를 입력해주세요.')} else {
                            alert('비밀번호가 틀렸습니다.')
                        }
                    }
              } else {
                alert('아이디가 틀렸습니다.')
              }
          } 
    }
    return (
            <div class="container-fluid">
                <div class="row">
                <div class="col-12">
                <div class="section">
                 <div className="login-page">
                    <div className="login-top">
                    <h1 className="login-character"></h1>
                    <h1 className="login-logo"></h1>
                </div>
                <form action="post" className="login-box">
                    <div className="login-sec-box">
                    <input type="input" ref={idtag} id="login_id" placeholder='아이디' onChange={handleInputId}></input>
                    <input type="password" ref={pwtag} id="password" placeholder='비밀번호' onChange={handleInputPw}></input>
                    </div>
                    <input type="submit" value="로그인" className="btn-secondary btn-55" onClick={loginClick}></input>
                </form>
                <div className="social-login">
                    <div className="naver-logo"></div>
                    <button className="btn">
                        <img src={naverLogo} alt="네이버로고" id="naver" />
                        <span className="naver-login-txt">네이버로 로그인</span>
                    </button>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
}

export default login;