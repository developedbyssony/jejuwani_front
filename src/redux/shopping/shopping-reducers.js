import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(  			//선택한 물품
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>		//카트에 해당물품 검색
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart				//카트에 해당되는 물품 있다면
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }	//해당물품 수량 +1
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],	//없다면 카트에 새로추가
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };			//필터 함수로 해당 물품 제외
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }	//수량 조정
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;