import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		/* update user */
		updateUserStart: (state) => {
			state.isFetching = true;
		},
		updateUserSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		updateUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const { updateUserFailure, updateUserStart, updateUserSuccess } = userSlice.actions;
export default userSlice.reducer;
