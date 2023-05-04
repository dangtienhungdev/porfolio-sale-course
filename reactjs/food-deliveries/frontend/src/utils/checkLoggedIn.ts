import jwt_decode from 'jwt-decode';

export const checkLoggedIn = async () => {
	const user = JSON.parse(localStorage.getItem('user') || '{}');
	const token = localStorage.getItem('token');
	if (user && user._id && token) {
		const decodedToken: any = jwt_decode(token);
		if (decodedToken.exp * 1000 > Date.now()) {
			return true;
		}
	}
	return false;
};
