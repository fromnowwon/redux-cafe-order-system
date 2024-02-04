import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, cancelOrder } from "../redux";

const CafeOrderSystem = () => {
	const dispatch = useDispatch();
	const orderList = useSelector((state) => state.orders.orderList);

	const handleAddOrder = (item) => {
		dispatch(addOrder(item, 1));
	};

	const handleCancelOrder = (orderId) => {
		dispatch(cancelOrder(orderId));
	};

	return (
		<div>
			<div>
				<h2>음료를 선택해주세요</h2>
				<button onClick={() => handleAddOrder("아메리카노")}>아메리카노</button>
				<button onClick={() => handleAddOrder("카페 라떼")}>카페 라떼</button>
				<button onClick={() => handleAddOrder("카라멜 마키아또")}>
					카라멜 마키아또
				</button>
				<button onClick={() => handleAddOrder("바닐라 라떼")}>
					바닐라 라떼
				</button>
			</div>
			<div style={{ marginTop: "20px", borderTop: "1px solid #eee" }}>
				<h2>주문 리스트</h2>
				<span>(총 {orderList.length}잔)</span>
				<ul>
					{orderList.map((order) => (
						<li key={order.id}>
							{order.item} (수량: {order.quantity})
							<button onClick={() => handleCancelOrder(order.id)}>
								주문 취소
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CafeOrderSystem;
