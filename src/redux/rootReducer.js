import { combineReducers } from "redux";
import orderReducer from "./order/reducer";
import customerReducer from "./customer/reducer";

// 모든 리듀서 통합
const rootReducer = combineReducers({
	orders: orderReducer,
	customers: customerReducer,
});

export default rootReducer;
