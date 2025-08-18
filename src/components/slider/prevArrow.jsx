import React from 'react';
import "../../css/slider.css"

function prevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow-prev" onClick={onClick}>
            <h1 className="ic-prev"></h1>
        </div>
       )  
}

export default prevArrow;