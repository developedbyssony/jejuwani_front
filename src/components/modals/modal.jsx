import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import '../../css/modal.css';
import DatePickerComponent from '../DatePickerComponent';

const modal = ({ modalClose, id, title, region, price }) => {

  const history = useHistory();
  const titler = useRef();
  const pricer = useRef();
  const amount = useRef();
  const [ item, setItem ] = useState([]);
  const [ userStartDate, setStartDate ] = useState();
  const [ userEndDate, setEndDate ] = useState();

  const parentFunction1 = (x) => {
    setStartDate(x);
    console.log(userStartDate);
  };

  const parentFunction2 = (x) => {
    setEndDate(x);
    console.log(userEndDate);
  };

  
  function modalClick(e) {
    e.preventDefault();

    if (amount.current.value < 1) {
        alert('수량을 선택해주세요.')
      } else {
        const newData = [{
          id:1,
          title:title,
          count:amount.current.value,
          price:Number(price),
        }]
        console.log(newData);
        history.push({pathname:"/order", state:{item:newData, wholeCountNum:(newData.count * newData.price)}})
              }
            }

    return (
      <>
    <div className="moal-wrapper">
    <div className="modal-bgc">
      <div className="modal-ticket">
        <div className="modal-ticket-box">
        <div className="modal-header">
        <p ref={titler}>{title}</p>
        <p>{region}</p>
        <p ref={pricer}>{price}</p>
        </div>
        <div className="modal-bottom">
        <div className="datepickers">
        <div className="date-picker-start">
        <DatePickerComponent
        parentFunction1={parentFunction1}
        parentFunction2={parentFunction2}
        /> 
        </div>
        <div className="date-picker-end">
        <DatePickerComponent
        parentFunction1={parentFunction1}
        parentFunction2={parentFunction2}
        /> 
        </div>
        </div>
        </div>
        <form>
        <div className="order-form" id="modal-order-form-reservation">
        <div className="order-inputs">
                    <div className="select-group is-active" id="order-inputz">
                    <select ref={amount} className="form-select" id="mandatory-select" required>
                    <option value="0">선택수량</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                    </div>
        </div>
        </div>
        <div className="btn-group">
        <button onClick={modalClick}>예약하기</button>
        </div>
        <div className="modal-btn-close">
        <h1 className="modal-ic-close" onClick={modalClose}></h1>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </>
)
}

export default modal;