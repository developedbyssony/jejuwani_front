import { useState, useEffect } from 'react';
import Posts from "../board/postActivity.jsx"; 
import Category from "../category.jsx";
import Pagination from "../board/pagination.jsx";

export default function activity() {
    /* 테스트용 */
    const [ posts, setPosts ] = useState([
        {
        "id": 1,
        "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
        "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
        "price": "40,000원",
        "regdate": "3/27/2022",
        "hit": 1
        }, {
           "id": 2,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
        "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
        "price": "40,000원",
        "regdate": "3/27/2022",
        "hit": 1
         }, {
           "id": 3,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 1
         }, {
           "id": 4,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 4
         }, {
           "id": 5,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 1
         }, {
           "id": 6,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 6
         }, {
           "id": 7,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 7
         }, {
           "id": 8,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 8
         }, {
           "id": 9,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 9
         }, {
           "id": 10,
           "title": "제주 서핑의 성지! 중문 색달 해변에서 제이제이서핑과 함께!! (중문)",
           "region": "제주특별자치도 서귀포시 특별자치도, 중문동 2073-36 KR",
           "price": "40,000원",
           "regdate": "3/27/2022",
           "hit": 10
         }
     ]);
  /* 백엔드 통신 함수 1 (PRODUCT 테이블)
  async function getActicityList() {
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
  async function getActicityList_info() {
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
  async function getActicityList_like() {
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

/*  백엔드 통신 함수 4 (RESERVATION 테이블)
  async function getActicityList_reservation() {
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

    useEffect(() => {
      /* 백엔드 통신 함수 호출 */
      /* getActivityList(); */
      /* getActicityList_info(); */
      /* getActicityList_like(); */
      /* getActicityList_reservation(); */
      
    },[]);

   const onToggle = (event) => {
    let classList = event.target.closest('td').children[0].classList.length;
    if(classList === 1) {
      let heartNum = event.target.closest('td').children[0].classList.add('isActive');
    } else {
      let heartNum = event.target.closest('td').children[0].classList.remove('isActive');
    }
  }

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
                    <div className="activity-landmark"></div>
                  <div className="section">
                  <h1 className="page-tit" id="english">Popular activities in Jeju</h1>
                    <table class="table">
                    <thead class="text-center">
                      <tr>
                           <th>번호</th>
                           <th>제목</th>
                           <th>지역</th>
                           <th>가격</th>
                           <th>날짜</th>
                           <th>조회수</th>
                           <th>Like</th>
                           <th>Reservation</th>
                        </tr>
                     </thead>
                     <tbody class="text-center align-middle">
                    <Posts 
                      posts={currentPosts(posts)} 
                      loading={loading}
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

