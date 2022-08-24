import React, { Component } from 'react';

class categoryFilter extends Component {
    render() {
      const { data } = this.props.category;
      console.log(`console.log + ${data}`);
      return (
      <div>
        <p>{data}</p>
      </div>
      );
  }
}

export default categoryFilter;