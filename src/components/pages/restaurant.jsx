import React, { useState } from 'react';
import Posts from "../board/postRestaurant"; 
import Category from "../category.jsx";
import Pagination from "../board/pagination.jsx";

export default function restaurant() {
  const onToggle = (event) => {
    let classList = event.target.closest('td').children[0].classList.length;
    if(classList === 1) {
      let heartNum = event.target.closest('td').children[0].classList.add('isActive');
    } else {
      let heartNum = event.target.closest('td').children[0].classList.remove('isActive');
    }
  }
  const [ posts, setPosts ] = useState([
      {
      "id": 1,
      "title": 2,
      "region": "12663 Upham Circle",
      "price": "$6.08",
      "regdate": "3/27/2022",
      "hit": 1
      }, {
         "id": 2,
         "title": 2,
         "region": "7714 Knutson Junction",
         "price": "$6.52",
         "regdate": "10/8/2021",
         "hit": 2
       }, {
         "id": 3,
         "title": 2,
         "region": "536 Grayhawk Alley",
         "price": "$3.83",
         "regdate": "4/5/2022",
         "hit": 3
       }, {
         "id": 4,
         "title": 1,
         "region": "65 Farwell Avenue",
         "price": "$8.56",
         "regdate": "11/29/2021",
         "hit": 4
       }, {
         "id": 5,
         "title": 1,
         "region": "1 Cody Junction",
         "price": "$8.19",
         "regdate": "4/26/2022",
         "hit": 5
       }, {
         "id": 6,
         "title": 2,
         "region": "3 Melby Crossing",
         "price": "$5.33",
         "regdate": "12/17/2021",
         "hit": 6
       }, {
         "id": 7,
         "title": 4,
         "region": "2159 Graceland Way",
         "price": "$4.26",
         "regdate": "6/30/2022",
         "hit": 7
       }, {
         "id": 8,
         "title": 4,
         "region": "8 Maple Street",
         "price": "$0.59",
         "regdate": "1/15/2022",
         "hit": 8
       }, {
         "id": 9,
         "title": 3,
         "region": "1598 Canary Drive",
         "price": "$3.58",
         "regdate": "1/21/2022",
         "hit": 9
       }, {
         "id": 10,
         "title": 4,
         "region": "92 Lerdahl Drive",
         "price": "$3.62",
         "regdate": "8/19/2021",
         "hit": 10
       }
   ]);

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
                           <th>가격</th>
                           <th>날짜</th>
                           <th>조회수</th>
                           <th>Like</th>
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