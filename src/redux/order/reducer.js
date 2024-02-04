import { ADD_ORDER, CANCEL_ORDER } from "./types";

// 초기 상태 정의
// => 주문이 없는 상태
const initialState = {
	orderList: [],
};

// 리듀서 함수 정의
// => 점원의 역할 정의
const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDER:
			return {
				...state,
				orderList: [
					...state.orderList,
					{
						id: state.orderList.length + 1,
						item: action.payload.item,
						quantity: action.payload.quantity,
					},
				],
			};
		case CANCEL_ORDER:
			return {
				...state,
				orderList: state.orderList.filter(
					(order) => order.id !== action.payload.orderId
				),
			};
		default:
			return state;
	}
};

export default orderReducer;
