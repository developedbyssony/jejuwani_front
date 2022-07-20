import axios from 'axios'

class AuthenticationService {
    // send username, password to the SERVER
    executeJwtAuthenticationService(userId, password) {
        return axios.post('http://localhost:8080/auth/register', { // 1) username과 password를 넣고 해당 주소로 post
        userId,
        password
        })
    }

    registerSuccessfulLoginForJwt(userId, token) { // 2) 로그인 성공하면 로컬스토리지에 토큰과 유저아이디 저장
        console.log("===registerSuccessfulLoginForJwt===") 
        localStorage.setItem('token', token); 
        localStorage.setItem('authenticatedUser', userId);
        this.setupAxiosInterceptors(this.createJWTToken(token)) // JWTToken 생성해 setupAxiosInterceptors에 넣음
        this.setupAxiosInterceptors();
    }

    createJWTToken(token) { // 3) 'Bearer ' 추가해서 jwt 토큰 생성
        return 'Bearer ' + token
    }

    setupAxiosInterceptors() { // 토큰이 있다면 헤더에 'Bearer ' + token 담아서 보냄
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        
        return false;
    }

    getLoggedInUserName() {
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }
}

export default new AuthenticationService();