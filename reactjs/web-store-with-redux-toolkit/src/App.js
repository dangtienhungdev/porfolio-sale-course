import { Route, Routes } from 'react-router-dom';

import FilterProduct from './components/FillterProduct/FilterProduct';
import Main from './components/Main/Main';
import React from 'react';
import SingleProduct from './components/FillterProduct/SingleProduct';

function App() {
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
