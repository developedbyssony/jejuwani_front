import "./css/App.css";
import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main1 from "./components/pages/mainPage";
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
import LayoutMy from "./components/layoutMy";
import LayoutBlog from "./components/layoutMyBlog";
import MyBlog from './components/pages/myblog';
import Order from './components/pages/orderSheet';
import Review from './components/pages/writeReview';
import Pay from './components/pages/payment';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions/index';
import Yourblog from './components/pages/yourBlog';

export default function App({ FileInput, ProfileInput, serverURL, userId, store }) {
  const [blogData,setData] = useState([]);

    useEffect(() => {
    },[]);


  const dispatch = useDispatch();

  const onIncrease = () => {
      dispatch(increase());
    };
  
  const onDecrease = () => {
      dispatch(decrease());
    };

  const addToCart = () => {
      dispatch(addToCart());
    };

    const viewCnt1 = () => {
      dispatch(viewCnt1());
    };

    const viewCnt2 = () => {
      dispatch(viewCnt2());
    };

  

  const [user,setUser] = useState(null);
  const login = ({ id, pwd }) => setUser(signIn({ id, pwd }));
  const logout = () => setUser(null);
  
  const initialCartItem = localStorage.getItem('cartState');

  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const dataId = useRef(0);
  const [isLogin , setIsLogin] = useState(false);

  function loginCallBack(login) {
    setIsLogin(!isLogin);
    console.log('로그인 사용자가 접속하였습니다.');
  }

  const onCreate = (key, category, region, title, contents, fileName, fileURL) => {
    const created_date = new Date().getTime();
    /*
    const formData = new FormData();
    formData.append('key', key);
    formData.append('category', category);
    formData.append('region', region);
    formData.append('title', title);
    formData.append('contents', contents);
    formData.append('fileName',fileName);
    formData.append('fileURL',fileURL);
    formData.append('created_date', created_date);
    */
   const newPost = {
    key,
    category,
    region,
    title,
    contents,
    fileName,
    fileURL,
    created_date,
    id:dataId.current
   }

    dataId.current += 1;
    setData([newPost,...blogData]); // 새로운 아이템에 기존 데이터를 이어붙인 형태로 setState
    console.log(blogData);
  
    /*
    for (let key of formData.keys()) {
      console.log(key, ":", formData.getAll(key));
    }
    for(let i=0; i < blogData.length; i++ ) {
      console.log(JSON.stringify(blogData[i]));
    }
    console.log(blogData);
    var formSerializeArray = formData.serializeArray();
    var json = JSON.stringify(formSerializeArray);

    console.log(json);
    */
    /*
    for (let key of blogData.keys()) {
      console.log(key, ":", blogData.getAll(key));
    }
    /*
    for (let key of blogData) {
      console.log(key.entries().next());
    }
   
    console.log(blogData);
     */
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/">
          <Layout initialCartItem={initialCartItem} children={<Main1 isLogin={isLogin} store={store} />}/>
        </Route>
        <Route path="/blog">
          <LayoutBlog children={<Blog />}/>
        </Route>
        <Route path="/yourblog">
          <LayoutBlog children={<Yourblog blogData={blogData} />}/>
        </Route>
        <Route path="/myblog">
          <LayoutBlog children={<MyBlog FileInput={FileInput} ProfileInput={ProfileInput} blogData={blogData} userId={userId}/>}/>
        </Route>
        <Route path="/my">
          <LayoutMy children={<Update FileInput={FileInput} serverURL={serverURL}/>}/>
        </Route>
        <Route path="/login">
          <Layout children={<Login loginCallBack={loginCallBack} serverURL={serverURL} />}/>
        </Route>
        <Route path="/signup">
          <Layout initialCartItem={initialCartItem} children={<SignUp serverURL={serverURL}/>}/>
        </Route>
        <Route path="/activity">
          <Layout initialCartItem={initialCartItem} children={<Activity/>}/>
        </Route>
        <Route path="/restaurant">
          <Layout initialCartItem={initialCartItem} children={<Restaurant/>}/>
        </Route>
        <Route path="/detail">
          <Layout initialCartItem={initialCartItem} children={<Detail addToCart={addToCart} />}/>
        </Route>
        <Route path="/detail2">
          <Layout initialCartItem={initialCartItem} children={<Detail2/>}/>
        </Route>
        <Route path="/navigation">
          <Layout initialCartItem={initialCartItem} children={<Navigation/>}/>
        </Route>
        <Route path="/cart">
          <Layout initialCartItem={initialCartItem} children={<Cart serverURL={serverURL} userId={userId} store={store} />}/>
        </Route>
        <Route path="/write">
          <Layout initialCartItem={initialCartItem} children={<Write FileInput={FileInput} onCreate={onCreate} />}/>
        </Route>
        <Route path="/review">
          <Layout initialCartItem={initialCartItem} children={<Review/>}/>
        </Route>
        <Route path="/order">
          <Layout initialCartItem={initialCartItem} children={<Order/>}/>
        </Route>
      <Route path="/payment">
          <Layout initialCartItem={initialCartItem} children={<Pay/>}/>
        </Route>
      </BrowserRouter>
    </div>
);
}