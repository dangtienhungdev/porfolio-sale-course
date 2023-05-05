import { createSlice } from '@reduxjs/toolkit';
import { getAllFoods } from '../actions/foodAction';

const foodSlice = createSlice({
	name: 'food',
	initialState: {
		foods: [],
		isLoading: false,
		error: false,
	},
	reducers: {
		/* getAllFood */
		getAllFoodStart: (state) => {
			state.error = false;
			state.isLoading = true;
		},
		getAllFoodSuccess: (state, action) => {
			state.error = false;
			state.isLoading = false;
			state.foods = action.payload;
		},
		getAllFoodFailure: (state) => {
			state.error = true;
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(getAllFoods.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllFoods.fulfilled, (state, action) => {
			state.error = false;
			state.isLoading = false;
			state.foods = action.payload;
		});
		builder.addCase(getAllFoods.rejected, (state) => {
			state.error = true;
			state.isLoading = false;
		});
	},
});

export const { getAllFoodStart, getAllFoodSuccess, getAllFoodFailure } = foodSlice.actions;

export default foodSlice.reducer;
