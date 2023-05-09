import { createSlice } from '@reduxjs/toolkit';
import { getUserById } from '../actions/userAction';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		/* get One */
		getOneUserStart: (state) => {
			state.isFetching = true;
		},
		getOneUserSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		getOneUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
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
		/* logout user */
		logoutUserStart: (state) => {
			state.isFetching = true;
		},
		logoutUserSuccess: (state) => {
			state.isFetching = false;
			state.currentUser = null;
		},
		logoutUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserById.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(getUserById.fulfilled, (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		});
		builder.addCase(getUserById.rejected, (state) => {
			state.isFetching = false;
			state.error = true;
		});
	},
});

export const {
	updateUserFailure,
	updateUserStart,
	updateUserSuccess,
	logoutUserStart,
	logoutUserSuccess,
	logoutUserFailure,
	getOneUserStart,
	getOneUserSuccess,
	getOneUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
