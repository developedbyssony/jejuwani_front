import { useState, useEffect }from 'react';
import { useHistory } from 'react-router';
import '../../css/cardUnit.css';
import CartList_empty from './CartList_empty';

function CartCount({item}) {
    const history = useHistory();
    const [ itemz, setItems ] = useState([]);
    const [ isItEmpty, conFirmList ] = useState(false);
    useEffect(() => {
        if(item.length === 0) {
            conFirmList(!isItEmpty);
            console.log('카운트에서 빈 배열 확인');
        } else {
            conFirmList(false);
        }
    },[item]);
    const wholeCount = item.map((i) => Number(i[0].price) * i[0].count);
    const wholeCountItem = wholeCount.reduce((acc,cur) => `${acc}  ${cur} +`,'결제 예정 금액 : ');
    const wholeCountNum = wholeCount.reduce((acc,cur) => Number(acc) + Number(cur),0);
            return (
            <>
               <ul className="likeUnitwrapper">
                <li className="sumcount">
                    <div className="price-13" id="price-sum">
                        <div className="price-sumcount">
                        <strong className="amount">{wholeCountItem || null }</strong>
                        <span className="currency">= {wholeCountNum || 0 }원</span>
                    </div>
                </div>
                </li>
                <div className="buyBtn-section">
                    <button className="btn-secondary btn-55" id="buyBtn" onClick={() => {
                        history.push({pathname:"/order", state:{item:item,wholeCountNum:wholeCountNum}})}} >구매하기</button>
                </div>
                </ul>
            </>        
            )
            };

export default CartCount;