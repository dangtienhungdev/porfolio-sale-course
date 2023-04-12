import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice/productSlice';
import sliderReducer from '../features/sliderSlice/sliderSlice';

export const store = configureStore({
	reducer: {
		slider: sliderReducer,
		products: productReducer,
	},
});
