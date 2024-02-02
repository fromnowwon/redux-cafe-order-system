import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

// 여러 middleware 배열로 관리
const middleware = [logger];

// rootReducer를 사용하는 스토어 생성
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;