import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks';

export const CheckAdmininRole = (): boolean => {
	const { currentUser } = useAppSelector((state: RootState) => state.auth.login);
	console.log('🚀 ~ file: checkAdmininRole.tsx:6 ~ CheckAdmininRole ~ currentUser:', currentUser);
	if (!currentUser) {
		return false;
	}
	// if (currentUser.role === 'admin') {
	// 	return true;
	// }
	return false;
};
