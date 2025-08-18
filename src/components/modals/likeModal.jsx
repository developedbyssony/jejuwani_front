import '../../css/modal.css';
import { Link } from "react-router-dom";

function likeModal({modalClose, store}) {
            return (
                <div className="modal-bgc">
                <aside className="cart-modal"> 
                    <h1 className="cart-tit">찜 리스트에 상품을 담았습니다.</h1>
                    <div className="btn-group-cart">
                    <Link to="/cart">
                    <a className="btn-primary btn-40">
                        찜 리스트 보러가기
                    </a>
                    </Link>
                    <div className="btn-secondary btn-40" onClick={modalClose}>
                        확인
                    </div>
                   </div>
                </aside>
                </div>
            )
            }

export default likeModal;