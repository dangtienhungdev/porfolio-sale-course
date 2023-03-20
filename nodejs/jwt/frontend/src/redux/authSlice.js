import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		login: {
			currentUser: null,
			isFetching: false,
			error: false,
		},
		register: {
			isFetching: false,
			error: false,
			success: false,
		},
	},
	reducers: {
		/* login */
		loginStart: (state) => {
			state.login.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.login.isFetching = false;
			state.login.currentUser = action.payload;
			state.login.error = false;
		},
		loginFailure: (state) => {
			state.login.isFetching = false;
			state.login.error = true;
		},
		/* register */
		registerStart: (state) => {
			state.register.isFetching = true;
		},
		registerSuccess: (state) => {
			state.register.isFetching = false;
			state.register.success = true;
			state.register.error = false;
		},
		registerError: (state) => {
			state.register.isFetching = false;
			state.register.error = true;
			state.register.success = false;
		},
		/* logout */
		logoutStart: (state) => {
			state.login.isFetching = true;
		},
		logoutSuccess: (state) => {
			state.login.isFetching = false;
			state.login.currentUser = null;
			state.login.error = false;
		},
		logoutFailure: (state) => {
			state.login.isFetching = false;
			state.login.error = true;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	registerStart,
	registerSuccess,
	registerError,
	logoutStart,
	logoutSuccess,
	logoutFailure,
} = authSlice.actions;
export default authSlice.reducer;
