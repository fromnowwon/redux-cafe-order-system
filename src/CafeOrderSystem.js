import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, cancelOrder } from './actions';

const CafeOrderSystem = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);

  const handleAddOrder = (item) => {
    dispatch(addOrder(item, 1));
  };

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div>
      <div>
        <h3>음료를 선택해주세요</h3>
        <button onClick={() => handleAddOrder('아메리카노')}>아메리카노</button>
        <button onClick={() => handleAddOrder('카페 라떼')}>카페 라떼</button>
        <button onClick={() => handleAddOrder('카라멜 마키아또')}>카라멜 마키아또</button>
        <button onClick={() => handleAddOrder('바닐라 라떼')}>바닐라 라떼</button>
      </div>
      <div>
        <h3>주문 리스트</h3>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              {order.item} (수량: {order.quantity})
              <button onClick={() => handleCancelOrder(order.id)}>주문 취소</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CafeOrderSystem;
