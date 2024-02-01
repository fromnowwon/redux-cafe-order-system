// 액션 타입 정의
// => 요구 사항 정의
export const ADD_ORDER = 'ADD_ORDER';
export const CANCEL_ORDER = 'CANCEL_ORDER';

// 액션 생성 함수 정의
// => 요구 사항에 대한 동작
export const addOrder = (item, quantity) => ({
  type: ADD_ORDER,
  payload: { item, quantity },
});

export const cancelOrder = (orderId) => ({
  type: CANCEL_ORDER,
  payload: { orderId },
});