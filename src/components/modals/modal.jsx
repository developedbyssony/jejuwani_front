import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../css/modal.css';
import DatePickerComponent from '../DatePickerComponent';

const modal = ({ modalClose, id, name, productId, title, region, price, resevation, useId }) => {
    return (
      <>
    <div className="modal-bgc">
      <div className="modal">
        <div className="modal-header">
        <div className="modal-title"><h1>Reservation</h1></div>
        <div className="modal-title0">
        <span className="signup-title">액티비티명</span>
        <p>{title}</p>
        </div>
        <div className="modal-title1">
        <span className="signup-title">지역</span>
        <p>{region}</p>
        </div>
        <div className="modal-title2">
        <span className="signup-title">가격 </span>
        <p>{price}</p>
        </div>
        <div className="modal-title3">
        <span className="signup-title">예약 날짜</span>
        <div className="datepickers">
        <div className="date-picker-start">
        <p>start date</p>
        <DatePickerComponent
        /> 
        </div>
        <div className="date-picker-end">
        <p>end date</p>
        <DatePickerComponent
        /> 
        </div>
        </div>
        </div>
        <div className="datepickers">
        </div>
        <div className="btn-group">
        <button className="btn-outlined btn-40">초기화</button>
        <Link to="/order">
        <button className="btn-primary btn-40">선택</button>
        </Link>
        </div>
        <div className="modal-btn-close">
        <h1 className="modal-ic-close" onClick={modalClose}></h1>
        </div>
        </div>
        </div>
        </div>
        </>
)
}

export default modal;