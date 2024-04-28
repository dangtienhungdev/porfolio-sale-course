import Profile from './profile';
import React from 'react';
import { cookies } from 'next/headers';
import envConfig from '@/config';

const ProfilePage = async () => {
	const cookieStore = cookies();
	const sessionToken = cookieStore.get('sessionToken');

	const result = await fetch(`${envConfig.NEXT_PUBLIC_API_URL}/account/me`, {
		headers: {
			Authorization: `Bearer ${sessionToken?.value}`,
		},
	}).then((res) => res.json());

	console.log('🚀 ~ ProfilePage ~ result:', result);
	return (
		<div>
			name: {result.data.email}
			<Profile />
		</div>
	);
};

export default ProfilePage;
