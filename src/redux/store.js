import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// 여러 middleware 배열로 관리
// thunk를 먼저 배치
const middleware = [thunk, logger];

// rootReducer를 사용하는 스토어 생성
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
