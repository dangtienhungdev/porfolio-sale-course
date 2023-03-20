import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		users: {
			allUsers: null,
			isFetching: false,
			error: false,
		},
	},
	reducers: {
		getUsersStart: (state) => {
			state.users.isFetching = true;
		},
		getUsersSuccess: (state, action) => {
			state.users.isFetching = false;
			state.users.allUsers = action.payload;
			state.users.error = false;
		},
		getUsersFailure: (state) => {
			state.users.error = true;
			state.users.isFetching = false;
		},
	},
});

export const { getUsersStart, getUsersSuccess, getUsersFailure } =
	userSlice.actions;

export default userSlice.reducer;
