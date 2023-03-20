import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		users: {
			allUsers: null,
			isFetching: false,
			error: false,
		},
		message: '',
	},
	reducers: {
		/* get all users */
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
		/* delete user */
		deleteUserStart: (state) => {
			state.users.isFetching = true;
		},
		deleteUserSuccess: (state, action) => {
			state.users.isFetching = false;
			state.users.allUsers = state.users.allUsers.filter(
				(user) => user._id !== action.payload
			);
			state.users.error = false;
			state.message = 'Delete user successfully';
		},
		deleteUserFailure: (state) => {
			state.users.error = true;
			state.users.isFetching = false;
			state.message = 'Delete user failed';
		},
	},
});

export const {
	getUsersStart,
	getUsersSuccess,
	getUsersFailure,
	deleteUserStart,
	deleteUserSuccess,
	deleteUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
