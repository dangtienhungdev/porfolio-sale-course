import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const productSlice = createSlice({
	name: 'products',
	initialState: {
		filteredProducts: [],
	},
	reducers: {
		filteredProducts: (state, action) => {
			try {
				const filter = storeData.filter((item) => {
					return item.type === action.payload;
				});
				state.filteredProducts = filter;
				sessionStorage.setItem('filteredData', JSON.stringify(filter));
			} catch (error) {
				console.log(error);
			}
		},
	},
});

export const { filteredProducts } = productSlice.actions;
export default productSlice.reducer;
