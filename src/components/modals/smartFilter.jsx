import React, { useState } from 'react';
import '../../css/modal.css';

function smartFilter({ modalClose }) {
    return (
    <div className="modal-bgc">
      <div className="modal">
        <div className="modal-header">
        <p className="reservation-date">예약 날짜</p>
        </div>
        <div className="datepickers">
        <div className="date-picker-start">
        <p>start date</p>
        </div>
        <div className="date-picker-end">
        <p>end date</p>
        </div>
        </div>
        <div className="btn-group">
        <button className="btn-outlined btn-40">초기화</button>
        <button className="btn-primary btn-40">선택</button>
        </div>
        <div className="modal-btn-cloe">
        <h1 className="modal-ic-close" onClick={modalClose}></h1>
        </div>
      </div>
    </div>
                        /*

                <div className="modal-bgc">
                    <aside className="cart-modal"> 
                    <div className="collapseCard">
                        <div className="collapseCardBody">
                        <div className="rentalCars">
                        </div>
                            <div className="section-main-activity-sorting">
                            <div className="navi-sort-btn-row">
                                <div className="rental-sort">
                                <button className="btn-sort btn-s40">경차</button>
                                <button className="btn-sort btn-s40">준중형</button>
                                <button className="btn-sort btn-s40">SUV</button>
                                <button className="btn-sort btn-s40">고급</button>
                                </div>
                                <div className="rental-datepicker">
                                <DatePickerComponent />
                                </div>
                            </div>
                            </div>
                            <div className="rentalCarContentsDisplay">
                            <div className="rentalCarFilter">
                                {/*<ul className="rentalCarFilterUl">
                                    
                                <h1 className="page-tit" id="smart-filter">스마트 필터</h1>
                                <li><span className="signup-tit1">보험</span></li>
                                <li><span className="signup-tit1">연료</span></li>
                                <li><span className="signup-tit1">연식</span></li>
                                <li><span className="signup-tit1">평점</span></li>
                                </ul>
                            </div>
                            <div className="rentalCarList">
                            </div>
                            </div>
                            <div className="modal-btn-cloe">
                                    <h1 className="modal-ic-close" onClick={modalClose}></h1>
                            </div>
                        </div>
                    </div> 
                            <div className="modal-btn-close">
                                    <h1 className="modal-ic-close" onClick={modalClose}></h1>
                            </div>
                </aside>
            </div>*/
            )
            }

export default smartFilter;