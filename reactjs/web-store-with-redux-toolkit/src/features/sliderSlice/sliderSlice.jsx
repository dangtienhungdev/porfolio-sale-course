import { createSlice } from '@reduxjs/toolkit';
import { sliderData } from '../../assets/data/dummyData';

export const sliderSlice = createSlice({
	name: 'slider',
	initialState: {
		value: 0,
		length: sliderData.length,
	},
	reducers: {
		nextSlice(state, action) {
			state.value = action.payload >= state.length ? 0 : action.payload;
		},
		prevSlice(state, action) {
			state.value = action.payload < 0 ? state.length - 1 : action.payload;
		},
		dotSlice(state, action) {
			state.value = action.payload;
		},
	},
});

export const { nextSlice, prevSlice, dotSlice } = sliderSlice.actions;
export default sliderSlice.reducer;
