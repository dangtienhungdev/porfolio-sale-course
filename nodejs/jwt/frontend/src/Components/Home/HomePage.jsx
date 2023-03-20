import './home.css';

import { deleteUser, getAllUsers } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { createAxios } from '../../createInstance';
import jwt_decode from 'jwt-decode';
import { loginSuccess } from '../../redux/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	/* react-redux */
	// lấy ra thông tin của người dùng đăng nhập để lấy ra accessToken
	const userInfo = useSelector((state) => state.auth.login?.currentUser);
	// lấy ra danh sách user
	const usersList = useSelector((state) => {
		return state.users.users?.allUsers;
	});
	// lấy ra message
	const message = useSelector((state) => state.users?.message);

	/* axios */
	let axiosJWT = createAxios(userInfo, dispatch, loginSuccess);

	/* handleDelete */
	const handleDelete = (id) => {
		deleteUser(userInfo?.accessToken, dispatch, id, axiosJWT);
	};

	/* useEffect */
	useEffect(() => {
		// nếu người dùng chưa đăng nhập thì sẽ chuyển hướng về trang login
		// nếu người dùng đã đăng nhập thì sẽ gọi api để lấy ra danh sách user
		if (!userInfo) {
			navigate('/login');
		} else {
			getAllUsers(userInfo?.accessToken, dispatch, axiosJWT);
		}
	}, [userInfo?.accessToken, dispatch, navigate, userInfo, axiosJWT]);

	return (
		<main className="home-container">
			<div className="home-title">User List</div>
			<div className="home-role">
				{`Your role: ${userInfo?.admin === true ? 'Admin' : 'User'}`}
			</div>
			<div className="home-userlist">
				{usersList &&
					usersList.length > 0 &&
					usersList.map((user) => {
						return (
							<div className="user-container" key={user._id}>
								<div className="home-user">{user.username}</div>
								<div
									className="delete-user"
									onClick={() => handleDelete(user._id)}
								>
									{' '}
									Delete{' '}
								</div>
							</div>
						);
					})}
			</div>
			{message && <div className="home-message">{message}</div>}
		</main>
	);
};

export default HomePage;
