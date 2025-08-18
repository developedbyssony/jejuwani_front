import React from 'react';
import '../../css/modal.css';
import { Link } from "react-router-dom";

function deleteModal({modalClose}) {
            return (
                <div className="modal-bgc">
                <aside className="cart-modal"> 
                    <h1 className="cart-tit">이 상품을 삭제하겠습니까?</h1>
                    <div className="btn-group-cart">
                    <a className="btn-secondary btn-40" onClick={modalClose}>
                        취소
                    </a>
                    <a className="btn-primary btn-40" href="/">
                        확인
                    </a>
                    </div>
                </aside>
                </div>
            )
            }

export default deleteModal;