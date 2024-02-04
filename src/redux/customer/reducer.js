import {
	FETCH_CUSTOMER_REQUEST,
	FETCH_CUSTOMER_SUCCESS,
	FETCH_CUSTOMER_FAILURE,
} from "./types";

const initialState = {
	items: [],
	loading: false,
	error: null,
};

const customerReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CUSTOMER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_CUSTOMER_SUCCESS:
			return {
				...state,
				items: action.payload,
				loading: false,
			};
		case FETCH_CUSTOMER_FAILURE:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default customerReducer;
