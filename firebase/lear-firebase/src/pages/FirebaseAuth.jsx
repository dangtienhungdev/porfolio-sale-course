import React, { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';

import { auth } from '../firebase/config-firebse';

const FirebaseAuth = () => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const [userInfo, setUserInfo] = useState({});
	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	onAuthStateChanged(auth, (currentUser) => {
		currentUser ? setUserInfo(currentUser) : setUserInfo({});
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
		console.log('🚀 ~ file: FirebaseAuth.jsx:34 ~ handleSubmit ~ user', user);
		// await updateProfile(auth.currentUser, {
		// 	displayName: 'đặng tiến hưng',
		// });
		setUserInfo(user);
		console.log('success');
	};
	const handleSignout = () => {
		signOut(auth);
	};
	return (
		<div>
			<form className="w-full max-w-lg mx-auto my-2" onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email"
					className="border border-gray-500 p-2 w-full mb-4 outline-none"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="password"
					id="password"
					placeholder="password"
					className="border border-gray-500 p-2 w-full mb-4 outline-none"
					onChange={handleInputChange}
				/>
				<button className="bg-blue-400 w-full p-2">Register</button>
			</form>
			<div className="text-right">
				<span>{userInfo?.email || 'welcome'}</span>
				<button className="p-2 bg-blue-400" onClick={handleSignout}>
					Sign Out
				</button>
			</div>
		</div>
	);
};

export default FirebaseAuth;
