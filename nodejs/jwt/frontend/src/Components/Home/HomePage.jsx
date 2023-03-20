import './home.css';

import { deleteUser, getAllUsers } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { loginSuccess } from '../../redux/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	/* axios */
	let axiosJWT = axios.create({});

	/* react-redux */
	// lấy ra thông tin của người dùng đăng nhập để lấy ra accessToken
	const userInfo = useSelector((state) => state.auth.login?.currentUser);
	// lấy ra danh sách user
	const usersList = useSelector((state) => state.users.users?.allUsers);
	// lấy ra message
	const message = useSelector((state) => state.users?.message);

	/* handleDelete */
	const handleDelete = (id) => {
		deleteUser(userInfo?.accessToken, dispatch, id, axiosJWT);
	};

	/*
    trước khi ta gửi 1 request nào đó mà dùng axiosJWT thì nó sẽ check hàm sử lí bên trong
    intercepter trước khi gọi 1 cái api nào đó
  */

	/* tạo ra refreshToken */
	const refreshToken = async () => {
		try {
			const res = await axios.post('/api/v1/auth/refresh', {
				withCredentials: true, // cho phép truy cập cookie của server
			});
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	axiosJWT.interceptors.request.use(
		async (config) => {
			let date = new Date();
			const decodeToken = jwt_decode(userInfo?.accessToken, config); // giải mã token
			if (decodeToken.exp < date.getTime() / 1000) {
				// nếu token hết hạn thì sẽ gọi api để lấy ra 1 cái token mới
				try {
					const data = await refreshToken(); // lấy ra 1 cái token mới
					console.log(
						'🚀 ~ file: HomePage.jsx:65 ~ axiosJWT.interceptors.request.use ~ data:',
						data
					);
					const refreshUser = {
						...userInfo,
						accessToken: data.accessToken,
					};
					dispatch(loginSuccess(refreshUser));
					config.headers['token'] = 'Bearer ' + data.accessToken;
				} catch (error) {
					console.log(error);
				}
			}
		},
		(error) => {
			return Promise.reject(error);
		}
	);

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
