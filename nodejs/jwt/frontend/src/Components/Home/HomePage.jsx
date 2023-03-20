import './home.css';

import { useDispatch, useSelector } from 'react-redux';

import { getAllUsers } from '../../redux/apiRequest';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// lấy ra thông tin của người dùng đăng nhập để lấy ra accessToken
	const userInfo = useSelector((state) => state.auth.login?.currentUser);
	// lấy ra danh sách user
	const usersList = useSelector((state) => state.users.users?.allUsers);
	/* useEffect */
	useEffect(() => {
		// nếu người dùng chưa đăng nhập thì sẽ chuyển hướng về trang login
		// nếu người dùng đã đăng nhập thì sẽ gọi api để lấy ra danh sách user
		if (!userInfo) {
			navigate('/login');
		} else {
			getAllUsers(userInfo?.accessToken, dispatch);
		}
	}, [userInfo?.accessToken, dispatch, navigate, userInfo]);
	return (
		<main className="home-container">
			<div className="home-title">User List</div>
			<div className="home-userlist">
				{usersList &&
					usersList.length > 0 &&
					usersList.map((user) => {
						return (
							<div className="user-container" key={user._id}>
								<div className="home-user">{user.username}</div>
								<div className="delete-user"> Delete </div>
							</div>
						);
					})}
			</div>
		</main>
	);
};

export default HomePage;
