import { useState, useEffect } from 'react';
import Posts from "../board/postActivity.jsx"; 
import Category from "../category.jsx";
import Pagination from "../board/pagination.jsx";
import activityData from '../../dummy/activity_sample.json';

export default function activity() {
    
  async function getActivityItems() {
            const arr = activityData;
            const init = arr.map((it,idx) => {
              return {
                "id": idx+1,
                "title": it.title,
                "region": it.address,
                "introduction":it.introduction,
                "tag": it.tag,
                "phone": it.phoneno,
                "price": Math.floor((Math.random()* (10000 - 3000 + 1) + 3000) / 10) * 100,
                "hit": Math.floor(Math.random()*10000),
                "like":Math.floor(Math.random()*100),
                "review": 0,
                "rating": Math.floor(Math.random() * 5),
                "region1" : it.label,
                "region2" : it.region2cd,
                "tag" : it.alltag,
                "imgSrc" : it.photoImg,
                }
            })
            setPosts([...init,posts]);
            console.log(pp);
            return pp;
        }

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
      getActivityItems();
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
                           <th>조회수</th>
                           <th>Like</th>
                           <th>Reservation</th>
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

