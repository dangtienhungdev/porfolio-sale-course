import { Route, Routes } from 'react-router-dom';

import FilterProduct from './components/FillterProduct/FilterProduct';
import Main from './components/Main/Main';
import React from 'react';
import SingleProduct from './components/FillterProduct/SingleProduct';
import { useSelector } from 'react-redux';

function App() {
	const cart = useSelector((state) => state.cart.cart);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	console.log('🚀 ~ file: App.js:12 ~ App ~ totalAmount:', totalAmount);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	console.log('🚀 ~ file: App.js:14 ~ App ~ totalPrice:', totalPrice);
	console.log('🚀 ~ file: App.js:11 ~ App ~ cart:', cart);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/filtered-products/:type" element={<FilterProduct />} />
				<Route
					path="/filtered-products/:type/:id"
					element={<SingleProduct />}
				/>
			</Routes>
		</div>
	);
}

export default App;
