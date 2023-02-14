import { AsideAdmin, DashboardLayout, Navigation } from '../../../layouts';
import { router, useEffect, useState } from '../../../config/config';

import { auth } from '../../../firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
	const [userInfo, setUserInfo] = useState({});
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			currentUser ? setUserInfo(currentUser) : router.navigate('/admin/login');
		});
	}, []);
	return /* html */ `
    <div class="flex flex-col">
      ${Navigation()}
      <div class='mt-[120px] flex justify-between bg-white px-4 my-4'>
        ${AsideAdmin()}
        ${DashboardLayout()}
      </div>
    </div>
  `;
};

export default Dashboard;
