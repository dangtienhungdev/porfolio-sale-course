import authReducer from './authSlice';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		users: userReducer,
	},
});
