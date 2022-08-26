import { useState, useEffect } from 'react';
import Posts from "../board/postActivity.jsx"; 
import Category from "../category.jsx";
import Pagination from "../board/pagination.jsx";

export default function activity() {
    
  async function getActivityItems() {
    try {
        const response =  await fetch(
            "http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=rwai4urhns253zsg&locale=kr&category=c1&title=레저&title=액티비티&title=테라피&title=어트랙션&title=체험&title=힐링&title=농어촌&title=포토&title=투어&title=스파&title=카약&title=수상&title=키즈&title=어트랙션&title=스파&title=다이빙&title=스쿠버&title=어린이&title=테마&title=승마&title=물놀이&title=실내&title=아이&title=요트&title=행글&title=유아&title=실외&title=파크",
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
                "price": Math.floor((Math.random()* (10000 - 3000 + 1) + 3000) / 10) * 100,
                "hit": Math.floor(Math.random()*10000),
                "like":Math.floor(Math.random()*100),
                "review": 0,
                "rating": Math.floor(Math.random() * 5),
                "region1" : it.region1cd,
                "region2" : it.region2cd,
                "tag" : it.alltag,
                "imgSrc" : it.repPhoto.photoid.imgpath,
                }
            })
            setPosts([...init,posts]);
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

