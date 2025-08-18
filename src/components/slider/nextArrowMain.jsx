import React from 'react';
import "../../css/slider.css"

function nextArrow(props) {
    const { onClick } = props;
       return (
        <div className="arrow-next-main" onClick={onClick}>
            <h1 className="ic-next-main"></h1>
        </div>
       )     
}

export default nextArrow;