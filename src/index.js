import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';

import './index.css';
import "./css/App.css";

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import ImageFileInput from './components/ImgfileInput/image_file_input';
import ImageFileProfileInput from './components/ImgfileInput/image_profile_input';
import ImageUploader from './service/image_uploader';
import KakaoMapRestaurant from './service/kakaoMapRestaurant';

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
  count: 0,
  text: '',
  list: []
};

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성합니다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const ADD_TO_CART = 'ADD_TO_CART';

/* 액션 생성함수 정의 */
// 액션 생성함수는 주로 camelCase 로 작성합니다.
function increase() {
  return {
    type: INCREASE // 액션 객체에는 type 값이 필수입니다.
  };
}

const decrease = () => ({
  type: DECREASE
});

const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    case ADD_TO_CART:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

/* 스토어 만들기 */
const store = createStore(rootReducer);
console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.
// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};
const unsubscribe = store.subscribe(listener); // 구독을 해제하고싶을 때는 unsubscribe() 를 호출

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(addToCart({ id: 1, text: '장바구니' }));

const userId = localStorage.getItem("authId");
const serverURL = "https://localhost:8383";
axios.defaults.baseURL = "https://localhost:8383";
axios.defaults.withCredentials = true;

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
        <App FileInput={FileInput} ProfileInput={ProfileInput} serverURL={serverURL} userId={userId} store={store} />
      </Provider>
    </BrowserRouter>
);