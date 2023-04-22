import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		login: {
			currentUser: null,
			isLoading: false,
			error: false,
		},
		register: {
			isLoading: false,
			error: false,
			success: false,
		},
	},
	reducers: {
		/* login */
		loginStart: (state) => {
			state.login.isLoading = true;
			state.login.error = false;
		},
		loginSuccess: (state, action) => {
			state.login.isLoading = false;
			state.login.currentUser = action.payload;
			state.login.error = false;
		},
		loginFailured: (state) => {
			state.login.error = true;
			state.login.isLoading = true;
		},
	},
});

export const { loginStart, loginSuccess, loginFailured } = authSlice.actions;
export default authSlice.reducer;
