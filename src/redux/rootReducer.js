import { combineReducers } from "redux";
import orderReducer from "./order/reducer";

// 모든 리듀서 통합
const rootReducer = combineReducers({
  orders: orderReducer,
})

export default rootReducer;