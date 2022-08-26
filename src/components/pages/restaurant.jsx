import { useState, useEffect } from 'react';
import Posts from "../board/postRestaurant"; 
import Category from "../category.jsx";
import Pagination from "../board/pagination.jsx";

export default function restaurant() {

  async function getRestaurantItems() {
    try {
        const response =  await fetch(
            "http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr&category=c4",
            {
                method: "GET",
            });
        if(response.ok) {
            console.log('ok');
            const data = await response.json();
            const arr = data.items.slice(0,99);
            const init = arr.map((it,idx) => {
              return {
                "id": idx+1,
                "title": it.title,
                "region": it.address,
                "tag": it.alltag,
                "regdate": it.phoneno,
                "hit": Math.floor(Math.random()*100),
                "like":Math.floor(Math.random()*100),
                "review": 0,
                "rating": Math.floor(Math.random() * 5),
                "latitude" : it.latitude,
                "longitude" : it.longitude,
                "region1" : it.region1cd,
                "region2" : it.region2cd,
                "imgSrc" : it.repPhoto.photoid.imgpath,
                }
            })
            setPosts([...init,posts]);
            /*
            setPosts([...posts,{
                "id": 1,
                "title": it.title,
                "region": it.address,
                "price": it.alltag,
                "regdate": it.phoneno,
                "hit": 1
                }
              ]);
              */
            console.log(pp);
            return pp;
        } else {
        console.log('err');
        const errData = await response.json();
        throw errData;}
    } catch (e) {
        console.log(e);
    }
}



const [ pp, setPs ] = useState([]);
/* 테스트용 */
const [ posts, setPosts ] = useState([]);


  const onToggle = (event) => {
    let classList = event.target.closest('td').children[0].classList.length;
    if(classList === 1) {
      let heartNum = event.target.closest('td').children[0].classList.add('isActive');
    } else {
      let heartNum = event.target.closest('td').children[0].classList.remove('isActive');
    }
  }
  
  useEffect(() => {
    getRestaurantItems();
    console.log(pp);
  },[]);
   /* 백엔드 통신 함수 1 (PRODUCT 테이블)
  async function getRestaurantList() {
    try {
        const response =  await fetch(
            "http://localhost:8080/productinfo/list",
            {
                method: "GET",
            });
        if(response.ok) {
            console.log('ok');
            const data = await response.json();
            const initData = data.map((it) => {
                return {
                    address:it.address,
                    content:it.content,
                    contentExtra:it.contentExtra,
                    hit:it.hit,
                    id:it.id,
                    maxCapacity:it.maxCapacity,
                    price:it.price,
                    productId:it.productId,
                }
            })
            setActivityList(initData);
            console.log(activityList);
        } else {
        console.log('err');
        const errData = await response.json();
        throw errData;}
    } catch (e) {
        console.log(e);
    }
  }
  */

  /*  백엔드 통신 함수 2 (PRODUCT_INFO 테이블)
  async function getRestaurantList() {
    try {
        const response =  await fetch(
            "http://localhost:8080/productinfo/list",
            {
                method: "GET",
            });
        if(response.ok) {
            console.log('ok');
            const data = await response.json();
            const initData = data.map((it) => {
                return {
                    address:it.address,
                    content:it.content,
                    contentExtra:it.contentExtra,
                    hit:it.hit,
                    id:it.id,
                    maxCapacity:it.maxCapacity,
                    price:it.price,
                    productId:it.productId,
                }
            })
            setActivityList(initData);
            console.log(activityList);
        } else {
        console.log('err');
        const errData = await response.json();
        throw errData;}
    } catch (e) {
        console.log(e);
    }
  }
  */

/*  백엔드 통신 함수 3 (PRODUCT_LIKE 테이블)
  async function getRestaurantList() {
    try {
        const response =  await fetch(
            "http://localhost:8080/productinfo/list",
            {
                method: "GET",
            });
        if(response.ok) {
            console.log('ok');
            const data = await response.json();
            const initData = data.map((it) => {
                return {
                    address:it.address,
                    content:it.content,
                    contentExtra:it.contentExtra,
                    hit:it.hit,
                    id:it.id,
                    maxCapacity:it.maxCapacity,
                    price:it.price,
                    productId:it.productId,
                }
            })
            setActivityList(initData);
            console.log(activityList);
        } else {
        console.log('err');
        const errData = await response.json();
        throw errData;}
    } catch (e) {
        console.log(e);
    }
  }
  */


   const [ loading, setLoading ] = useState(false);
   const [ currentPage, setCurrentPage ] = useState(1);
   const [ postsPerPage, setPostsPerPage ] = useState(10);

   const indexOfLast = currentPage * postsPerPage;
   const indexOfFirst = indexOfLast - postsPerPage;
   const currentPosts = (posts) => {
      let currentPosts = 0;
      currentPosts = posts.slice(indexOfFirst, indexOfLast);
      return currentPosts;
   }

   console.log(posts);

   return (
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12">
                  <Category />
                  <div className="restaurant-landmark"></div>
                  <div className="section">
                  <h1 className="page-tit" id="english">Popular restaurants in Jeju</h1>
                    <table class="table">
                    <thead class="text-center">
                      <tr>
                           <th>번호</th>
                           <th>제목</th>
                           <th>지역</th>
                           <th>Tag</th>
                           <th>번호</th>
                           <th>조회수</th>
                           <th>Like</th>
                        </tr>
                     </thead>
                     <tbody class="text-center align-middle">
                      <Posts 
                      posts={currentPosts(posts)} 
                      reverse={onToggle}></Posts>
                    </tbody>
                  </table>
                  <Pagination
                     postsPerPage={postsPerPage}
                     totalPosts={posts.length}
                     paginate={setCurrentPage}
                  ></Pagination>
                  </div>
                  </div>
                  </div>
               </div>
        );
    }