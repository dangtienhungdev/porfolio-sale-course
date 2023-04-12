import { Route, Routes } from 'react-router-dom';

import FilterProduct from './components/FillterProduct/FilterProduct';
import Main from './components/Main/Main';
import React from 'react';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/filtered-products/:type" element={<FilterProduct />} />
			</Routes>
		</div>
	);
}

export default App;
