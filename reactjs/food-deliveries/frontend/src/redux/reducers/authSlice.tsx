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
			state.login.isLoading = false;
		},
		/* register */
		registerStart: (state) => {
			state.register.isLoading = true;
		},
		registerSuccess: (state) => {
			state.register.error = false;
			state.register.isLoading = false;
			state.register.success = true;
		},
		registerFailure: (state) => {
			state.register.error = true;
			state.register.isLoading = false;
			state.register.success = false;
		},
		/* logout */
		logoutStart: (state) => {
			state.login.isLoading = true;
		},
		logoutSuccess: (state) => {
			state.login.error = false;
			state.login.isLoading = false;
			state.login.currentUser = null;
		},
		logoutFailure: (state) => {
			state.login.error = true;
			state.login.isLoading = false;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailured,
	registerStart,
	registerSuccess,
	registerFailure,
	logoutStart,
	logoutSuccess,
	logoutFailure,
} = authSlice.actions;
export default authSlice.reducer;
