import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: JSON.parse(sessionStorage.getItem('authUser')) || {
		user: {
			name: '',
			password: '',
			image: '',
			authUser: false,
		},
	},
	reducers: {
		login: (state, action) => {
			const userId = action.payload;
			const userValidation = 'admin';
			const passwordValidation = '1234567';
			state.user = userId;
			if (
				userId.name === userValidation &&
				userId.password === passwordValidation
			) {
				state.user.authUser = true;
				const saveState = JSON.stringify(userId);
				sessionStorage.setItem('authUser', saveState);
			} else {
				state.user.authUser = false;
			}
			// if (!userValidation || !passwordValidation) {
			// 	state.user.authUser = false;
			// } else {
			// 	state.user.authUser = true;
			// 	const saveState = JSON.stringify(userId);
			// 	sessionStorage.setItem('authUser', saveState);
			// }
		},
		logout: (state) => {
			state.user = {
				email: '',
				password: '',
				image: '',
				authUser: false,
			};
			sessionStorage.clear();
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
