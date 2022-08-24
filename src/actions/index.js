/* 액션 타입 정의 - 대문자 */ 
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const ADD_TO_CART = 'ADD_TO_CART';
const PICK_THIS_ITEM = 'PICK_THIS_ITEM';
const VIEW_CNT1 = 'VIEW_CNT1';
const VIEW_CNT2 = 'VIEW_CNT2';


/* 액션 생성함수 정의 - 카멜케이스 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const addToCart = item => ({
  type: ADD_TO_CART,
  item 
});
export const pickItem = item => ({
  type: PICK_THIS_ITEM,
  item 
});
export const viewCnt1 = count => ({
  type: VIEW_CNT1,
  count
});

export const viewCnt2 = count => ({
  type: VIEW_CNT2,
  count
});

/* 리덕스에서 관리 할 상태 정의 */
// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
  id:0,
  count: 0,
  view : 0,
  name: '아이템',
  list: [],
  listPick: [],
  board1: {count : 0},
  board2: {count : 0}
};

/* 리듀서 만들기 
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다! */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1
      };
    case "ADD_TO_CART":
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    case "PICK_THIS_ITEM":
        return {
          ...state,
          listPick: state.listPick.concat(action.item)
        };
    case "VIEW_CNT1":
        return {
          ...state,
          board1: state.board1.count  + 1
        };
    case "VIEW_CNT2":
        return {
          ...state,
          board2: state.board1.count  + 1
        };
    default:
      return state;
  }
}