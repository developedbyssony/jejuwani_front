import React from 'react';
import "../../css/slider.css"

function nextArrow(props) {
    const { onClick } = props;
       return (
        <div className="arrow-next" onClick={onClick}>
            <h1 className="ic-next"></h1>
        </div>
       )     
}

export default nextArrow;