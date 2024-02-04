import {
	FETCH_CUSTOMER_REQUEST,
	FETCH_CUSTOMER_SUCCESS,
	FETCH_CUSTOMER_FAILURE,
} from "./types";

// 동기적인 액션 생성자: 데이터를 받아오는 요청이 시작됐음을 알리는 경우
export const fetchCustomerRequest = () => {
	return {
		type: FETCH_CUSTOMER_REQUEST,
	};
};

// 동기적인 액션 생성자: 데이터를 성공적으로 받아온 경우
export const fetchCustomerSuccess = (customers) => {
	return {
		type: FETCH_CUSTOMER_SUCCESS,
		payload: customers,
	};
};

// 동기적인 액션 생성자: 데이터를 받아오는 과정에서 에러가 발생한 경우
export const fetchCustomerFailure = (err) => {
	return {
		type: FETCH_CUSTOMER_FAILURE,
		payload: err,
	};
};

// Thunk를 사용한 비동기 액션 생성자
export const fetchCustomer = () => {
	// dispatch를 인자로 받는다
	return async (dispatch) => {
		try {
			// 먼저 요청이 시작했음을 나타내는 액션 디스패치
			dispatch(fetchCustomerRequest());

			// 비동기 작업
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const customers = await response.json();

			// 비동기 작업 완료 후 성공 시 액션 디스패치
			dispatch(fetchCustomerSuccess(customers));
		} catch (error) {
			// 비동기 작업 실패 시 액션 디스패치
			dispatch(fetchCustomerFailure(error.message));
		}
	};
};

// export const fetchCustomer = () => {
// 	return (dispatch) => {
// 		dispatch(fetchCustomerRequest());
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((res) => res.json())
// 			.then((customers) => dispatch(fetchCustomerSuccess(customers)))
// 			.catch((err) => dispatch(fetchCustomerFailure(err)));
// 	};
// };
