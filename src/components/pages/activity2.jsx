import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import Posts from "../board/postActivity.jsx"; 
import Category from "../category.jsx";
import Pagination from "../board/pagination.jsx";

export default function activity() {
  const location = useLocation();
  const [ posts, setPosts ] = useState([]);
  const [data, setData] = useState([location.state]);
  
  async function getActivityItems1() {
    try {
        const response =  await fetch(
            "http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr&category=c1&region=제주시"
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
                "introduction":it.introduction,
                "tag": it.tag,
                "phone": it.phoneno,
                "price": 30000,
                "hit": 0,
                "like":0,
                "review": 0,
                "rating": 5,
                "region1" : it.region1cd,
                "region2" : it.region2cd,
                "tag" : it.alltag,
                "imgSrc" : it.repPhoto.photoid.imgpath,
                }
            })
            setPosts([...init,posts]);
        } else {
        console.log('err');
        const errData = await response.json();
        throw errData;}
    } catch (e) {
        console.log(e);
    }
}


async function getActivityItems2() {
    try {
        const response =  await fetch(
            "http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr&category=c1&region=서귀포시"
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
                "introduction":it.introduction,
                "tag": it.tag,
                "phone": it.phoneno,
                "price": 30000,
                "hit": 0,
                "like":0,
                "review": 0,
                "rating": 5,
                "region1" : it.region1cd,
                "region2" : it.region2cd,
                "tag" : it.alltag,
                "imgSrc" : it.repPhoto.photoid.imgpath,
                }
            })
            setPosts([...init,posts]);
        } else {
        console.log('err');
        const errData = await response.json();
        throw errData;}
    } catch (e) {
        console.log(e);
    }
}


async function getActivityItems3() {
    try {
        const response =  await fetch(
            "http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr&category=c1&region=우도&region=마라&region=추자"
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
                "introduction":it.introduction,
                "tag": it.tag,
                "phone": it.phoneno,
                "price": 30000,
                "hit": 0,
                "like":0,
                "review": 0,
                "rating": 5,
                "region1" : it.region1cd,
                "region2" : it.region2cd,
                "tag" : it.alltag,
                "imgSrc" : it.repPhoto.photoid.imgpath,
                }
            })
            setPosts([...init,posts]);
        } else {
        console.log('err');
        const errData = await response.json();
        throw errData;}
    } catch (e) {
        console.log(e);
    }
}

    useEffect(() => {
      //getActivityItems();
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

