import { AsideAdmin, Navigation, UserLayout } from '../../../layouts';
import { router, useEffect, useState } from '../../../config/config';

import { auth } from '../../../firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const UserPage = () => {
	const [userInfo, setUserInfo] = useState({});
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			currentUser ? setUserInfo(currentUser) : router.navigate('/admin/login');
		});
	}, []);
	return /* html */ `
    <div class="flex flex-col">
      ${Navigation()}
      <div class='mt-[120px] flex justify-between bg-white gap-x-6 px-4 my-4'>
        ${AsideAdmin()}
        ${UserLayout(userInfo)}
      </div>
    </div>
  `;
};

export default UserPage;
