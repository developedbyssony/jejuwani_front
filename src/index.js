import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';

import './index.css';
import "./css/App.css";
import reducer from 'actions';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ImageFileInput from './components/ImgfileInput/image_file_input';
import ImageFileProfileInput from './components/ImgfileInput/image_profile_input';
import ImageUploader from './service/image_uploader';
import KakaoMapRestaurant from './service/kakaoMapRestaurant';


/* 스토어 만들기 */
const store = createStore(reducer);
console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener); // 구독을 해제하고싶을 때는 unsubscribe() 를 호출


const userId = localStorage.getItem("authId");
const serverURL = "https://localhost:8080";
axios.defaults.baseURL = "https://localhost:8080";
axios.defaults.withCredentials = true;

const kakaoMap = props => {
  <KakaoMapRestaurant {...props} />
}
const imageUploader = new ImageUploader();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

const ProfileInput = props => (
  <ImageFileProfileInput {...props} imageUploader={imageUploader} />
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App FileInput={FileInput} ProfileInput={ProfileInput} serverURL={serverURL} userId={userId} store={store} map={kakaoMap}/>
      </Provider>
    </BrowserRouter>
);