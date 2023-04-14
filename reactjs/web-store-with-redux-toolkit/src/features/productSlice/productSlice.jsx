import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const productSlice = createSlice({
	name: 'products',
	initialState: {
		filteredProducts:
			JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
		singalProduct: JSON.parse(sessionStorage.getItem('singalProduct')) || {},
		error: false,
	},
	reducers: {
		/* lấy ra sản phẩn theo loại */
		filteredProducts: (state, action) => {
			try {
				const filter = storeData.filter((item) => {
					return item.type === action.payload;
				});
				state.filteredProducts = filter;
				state.error = false;
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
		/* fillter gender */
		filteredGender: (state, action) => {
			try {
				const gender = state.filteredProducts.filter(
					(product) => product.gender === action.payload
				);
				state.error = false;
				state.filteredProducts = gender;
				const oneGenderType = gender.length > 0;
				if (oneGenderType) {
					state.error = false;
					const saveState = JSON.stringify(gender);
					sessionStorage.setItem('filteredData', saveState);
				} else {
					state.error = true;
					state.filteredProducts = [];
				}
			} catch (error) {
				console.log(error);
			}
		},
		/* sort by price */
		sortByPrice: (state, action) => {
			try {
				const price = state.filteredProducts.sort((a, b) => {
					return a.price - b.price ? 1 : -1;
				});
				state.filteredProducts = price;
				let count = price.length;
				if (count > 1) {
					const noError = false;
					state.error = noError;
					if (!noError) {
						state.filteredProducts = price;
						const saveState = JSON.stringify(price);
						sessionStorage.setItem('filteredData', saveState);
					}
				} else {
					state.error = true;
					state.filteredProducts = [];
				}
			} catch (error) {
				return error;
			}
		},
		/* filter by colors */
		filterByColors: (state, action) => {
			try {
				const color = state.filteredProducts.filter((product) =>
					product.color.includes(action.payload)
				);
				state.error = false;
				state.filteredProducts = color;
				if (color.length <= 0) {
					state.error = true;
					state.filteredProducts = [];
				} else {
					state.error = false;
					state.filteredProducts = color;
					const saveState = JSON.stringify(color);
					sessionStorage.setItem('filteredData', saveState);
				}
			} catch (error) {
				console.log(error);
			}
		},
		/* filter by size */
		filterBySize: (state, action) => {
			try {
				const size = state.filteredProducts.filter((product) =>
					product.size.includes(action.payload)
				);
				state.error = false;
				state.filteredProducts = size;
				if (size.length <= 0) {
					state.error = true;
					state.filteredProducts = [];
				} else {
					state.error = false;
					state.filteredProducts = size;
					const saveState = JSON.stringify(size);
					sessionStorage.setItem('filteredData', saveState);
				}
			} catch (error) {
				return error;
			}
		},
	},
});

export const {
	filteredProducts,
	singalProduct,
	filteredGender,
	sortByPrice,
	filterBySize,
	filterByColors,
} = productSlice.actions;
export default productSlice.reducer;
