import { createStore } from 'redux';
import orderReducer from './reducers';

// orderReducer를 사용하는 스토어 생성
// => 담당 점원의 주문 목록 생성
const store = createStore(orderReducer);

export default store;