import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CafeOrderSystem from "./components/CafeOrderSystem";
import CustomerList from "./components/CustomerList";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>카페 주문 시스템</h1>
				<CafeOrderSystem />
				<CustomerList />
			</div>
		</Provider>
	);
}

export default App;
