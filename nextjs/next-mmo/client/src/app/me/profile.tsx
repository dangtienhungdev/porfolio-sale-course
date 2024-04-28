'use client';

import React, { useEffect, useState } from 'react';

import envConfig from '@/config';
import { useAppContext } from '../app-provider';

const Profile = () => {
	const { sessionToken } = useAppContext();

	const [profile, setProfile] = useState<any>({});

	useEffect(() => {
		(async () => {
			const result = await fetch(
				`${envConfig.NEXT_PUBLIC_API_URL}/account/me`,
				{
					headers: {
						Authorization: `Bearer ${sessionToken}`,
					},
				}
			).then((res) => res.json());
			console.log('🚀 ~ ProfilePage ~ result:', result);
			setProfile(result);
		})();
	}, [sessionToken]);
	return <div>Profile: {profile?.data?.email}</div>;
};

export default Profile;
