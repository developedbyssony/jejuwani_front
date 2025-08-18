import { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../css/category.css';

function category() {
  const [ category, setCategory ] = useState([{
        name : "제주시",
        value : "region1",
        number : 1,
      },
      {
        name : "서귀포시",
        value : "region2",
        number : 2,
      },
      {
        name : "마라도, 우도, 추자도",
        value : "region3",
        number : 3,
      }
    ]) 
  const history = useHistory();

    return (
      <div className="category">
        <div className="category-menu">{category.map(function(cate) {
           const view_url = `/activity/${cate.number}`;
           return(
          <a href="#" onClick={()=> {history.push({
          pathname: view_url, state:{post:cate}})}}> {cate.name} </a>)})}
      </div>
      </div>
    );
  }

export default category;