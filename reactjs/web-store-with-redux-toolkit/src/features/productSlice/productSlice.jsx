import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const productSlice = createSlice({
	name: 'products',
	initialState: {
		filteredProducts:
			JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
		singalProduct: JSON.parse(sessionStorage.getItem('singalProduct')) || {},
	},
	reducers: {
		/* lấy ra sản phẩn theo loại */
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
		/* lấy ra sản phẩm chi tiết */
		singalProduct: (state, action) => {
			try {
				const oneProduct = storeData.find((item) => item.id === action.payload);
				state.singalProduct = oneProduct;
				sessionStorage.setItem('singalProduct', JSON.stringify(oneProduct));
			} catch (error) {
				console.log(error);
			}
		},
	},
});

export const { filteredProducts, singalProduct } = productSlice.actions;
export default productSlice.reducer;
