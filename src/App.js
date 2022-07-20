import "./css/App.css";
import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main1 from "./components/pages/mainPage";
import Main2 from "./components/pages/mainPage";
import Blog from "./components/pages/blog";
import Login from "./components/pages/login";
import Write from "./components/pages/write";
import Cart from "./components/pages/cart";
import SignUp from "./components/pages/signup";
import Activity from "./components/pages/activity";
import Restaurant from "./components/pages/restaurant";
import Navigation from "./components/pages/navigation";
import Detail from "./components/pages/productDetailPage";
import Detail2 from "./components/pages/productDetailPage_Restaurant";
import Update from "./components/pages/update";
import Layout from "./components/layout";
import LayoutLogin from "./components/layoutLogin";
import LayoutMy from "./components/layoutMy";
import LayoutBlog from "./components/layoutMyBlog";
import MyBlog from './components/pages/myblog';
import Order from './components/pages/orderSheet';
import Review from './components/pages/writeReview';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions/index';

export default function App({ FileInput, ProfileInput, serverURL, userId, kakaoMap }) {
  const number = useSelector(state => state.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
      dispatch(increase());
    };
  
    const onDecrease = () => {
      dispatch(decrease());
    };
  
  
  const isAuthorized = localStorage.getItem("isAuthorized");
  useEffect(() => {
    /* 여기에서 백엔드 데이터 불러올 것 */
  },[]);

  const [user,setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ id, pwd }) => setUser(signIn({ id, pwd }));
  const logout = () => setUser(null);


  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const dataId = useRef(0);
  const [data, setData] = useState([]); 
  const [isLogin , setIsLogin] = useState(false);

  function loginCallBack(login) {
    setIsLogin(!isLogin);
    console.log('로그인 사용자가 접속하였습니다.');
  }

  const onCreate = (key, category, region, title, contents, fileName, fileURL) => {
    const created_date = new Date().getTime();
    const formData = new FormData();
    formData.append('key', key);
    formData.append('category', category);
    formData.append('region', region);
    formData.append('title', title);
    formData.append('contents', contents);
    formData.append('fileName',fileName);
    formData.append('fileName',fileURL);
    formData.append('created_date', created_date);

    dataId.current += 1;
    setData([formData,...data]); // 새로운 아이템에 기존 데이터를 이어붙인 형태로 setState
    for (let key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }
    console.log(data);
  }
   /*  { isAuthorized ? <Redirect to="/main" /> : <Redirect to="/" /> } */
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/">
          <Layout children={<Main1 isLogin={isLogin} kakaomap={kakaoMap}/>}/>
        </Route>
        <Route path="/main">
          <LayoutLogin children={<Main2 isLogin={isLogin} kakaomap={kakaoMap}/>}/>
        </Route>
        <Route path="/blog">
          <LayoutBlog children={<Blog />}/>
        </Route>
        <Route path="/myblog">
          <LayoutBlog children={<MyBlog FileInput={FileInput} ProfileInput={ProfileInput} myPostList={data} userId={userId}/>}/>
        </Route>
        <Route path="/my">
          <LayoutMy children={<Update FileInput={FileInput} serverURL={serverURL}/>}/>
        </Route>
        <Route path="/login">
          <Layout children={<Login loginCallBack={loginCallBack} serverURL={serverURL} />}/>
        </Route>
        <Route path="/signup">
          <Layout children={<SignUp serverURL={serverURL}/>}/>
        </Route>
        <Route path="/activity">
          <LayoutLogin children={<Activity/>}/>
        </Route>
        <Route path="/restaurant">
          <LayoutLogin children={<Restaurant/>}/>
        </Route>
        <Route path="/detail">
          <LayoutLogin children={<Detail/>}/>
        </Route>
        <Route path="/detail2">
          <LayoutLogin children={<Detail2/>}/>
        </Route>
        <Route path="/navigation">
          <LayoutLogin children={<Navigation/>}/>
        </Route>
        <Route path="/cart">
          <LayoutLogin children={<Cart serverURL={serverURL} userId={userId} onIncrease={onIncrease} onDecrease={onDecrease} number={number}/>}/>
        </Route>
        <Route path="/write">
          <LayoutLogin children={<Write FileInput={FileInput} onCreate={onCreate} />}/>
        </Route>
        <Route path="/review">
          <LayoutLogin children={<Review/>}/>
        </Route>
        <Route path="/order">
          <LayoutLogin children={<Order/>}/>
        </Route>
      </BrowserRouter>
    </div>
);
}