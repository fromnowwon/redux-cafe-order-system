import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomer } from "../redux";

const CustomerList = () => {
	const dispatch = useDispatch();
	const customerList = useSelector((state) => state.customers.items);
	const loading = useSelector((state) => state.customers.loading);

	useEffect(() => {
		dispatch(fetchCustomer());
	}, []);

	const customerItems = loading ? (
		<div>is loading...</div>
	) : (
		customerList.map((customer) => (
			<li key={customer.id}>
				<div className="item">
					<strong>Name</strong>
					<div>{customer.name}</div>
				</div>
				<div className="item">
					<strong>Email</strong>
					<div>{customer.email}</div>
				</div>
			</li>
		))
	);

	return (
		<div className="customers">
			<h2>고객 리스트</h2>
			<ul>{customerItems}</ul>
		</div>
	);
};

export default CustomerList;
