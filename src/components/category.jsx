import React, { Component } from 'react';
import '../css/category.css';

class category extends Component {
  state = {
    category : [
      {
        name : "제주시",
        value : "category1",
        number : 1,
      },
      {
        name : "서귀포시",
        value : "category2",
        number : 2,
      },
      {
        name : "북제주(서)",
        value : "category3",
        number : 3,
      },
      {
        name : "북제주(동)",
        value : "category4",
        number : 4,
      },
      {
        name : "남제주(서)",
        value : "category5",
        number : 5,
      },
      {
        name : "남제주(동)",
        value : "category6",
        number : 6,
      },
      {
        name : "마라도, 우도, 추자도",
        value : "category6",
        number : 7,
      }
    ],
  };

  render() {
    return (
      <div className="category">
        <div className="category-menu">{this.state.category.map(cate => (
        <a href="#">{cate.name}</a>
        ))}
      </div>
      </div>
    );
  }
}

export default category;