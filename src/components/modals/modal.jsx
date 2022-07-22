import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../css/modal.css';
import DatePickerComponent from '../DatePickerComponent';

const modal = ({ modalClose }) => {
    return (
    <div className="modal-bgc">
      <div className="modal">
        <div className="modal-header">
        <p className="reservation-date">예약 날짜</p>
        </div>
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
        <div className="btn-group">
        <button className="btn-outlined btn-40">초기화</button>
        <Link to="/order">
        <button className="btn-primary btn-40">선택</button>
        </Link>
        </div>
        <div className="modal-btn-cloe">
        <h1 className="modal-ic-close" onClick={modalClose}></h1>
        </div>
      </div>
    </div>
)
}

export default modal;