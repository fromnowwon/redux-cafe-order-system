import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CafeOrderSystem from './components/CafeOrderSystem';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>카페 주문 시스템</h1>
        <CafeOrderSystem />
      </div>
    </Provider>
  );
}

export default App;
