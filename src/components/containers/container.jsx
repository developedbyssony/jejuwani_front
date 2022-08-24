import React from 'react';
import CartItem from '../cart/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../../actions/index';

function container() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
      };
      const onDecrease = () => {
        dispatch(decrease());
      };
    

  return (
    <CartItem number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default container;
