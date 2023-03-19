import User from '../models/users.model.js';
import bcrypt from 'bcrypt'; // => mã hóa mật khẩu
import jwt from 'jsonwebtoken'; // => tạo token

/* fake database refresh token */
let refreshTokens = [];

export const authControllers = {
	/* register */
	register: async (req, res) => {
		try {
			/* mã hóa mật khẩu */
			const salt = await bcrypt.genSalt(10);
			const hashed = await bcrypt.hash(req.body.password, salt);
			/* create user */
			const newUser = await new User({
				username: req.body.username,
				email: req.body.email,
				password: hashed,
			});
			/* save user */
			const user = await newUser.save();
			res.status(200).json(user);
		} catch (error) {
			res.status(500).json(error);
		}
	},

	/* generic access token */
	generateAccessToken: (user) => {
		return jwt.sign(
			{ id: user._id, admin: user.admin },
			process.env.JWT_ACCESS_KEY, // => key để mã hóa token
			{ expiresIn: '30s' } // => thời gian tồn tại của token
		);
	},

	/* generate refresh token */
	generateRefreshToken: (user) => {
		return jwt.sign(
			{ id: user._id, admin: user.admin },
			process.env.JWT_REFRESH_TOKEN, // => key để mã hóa token
			{ expiresIn: '1d' } // => thời gian tồn tại của token
		);
	},

	/* login */
	loginUser: async (req, res) => {
		try {
			/* tìm người dùng trùng với username người dùng gửi lên server */
			const user = await User.findOne({ username: req.body.username });
			if (!user) {
				/* nếu không có người dùng thì sẽ trả về 404 */
				return res.status(404).json('User not found');
			}
			/* so sánh mật khẩu người dùng gửi lên server với mật khẩu trong database */
			const validPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!validPassword) {
				/* nếu mật khẩu không đúng thì sẽ trả về 404 */
				return res.status(400).json('Wrong password');
			}
			/* nếu username & password đúng thì trả về 200 */
			if (user && validPassword) {
				const accessToken = authControllers.generateAccessToken(user);
				const refreshToken = authControllers.generateRefreshToken(user);
				refreshTokens.push(
					refreshToken
				); /* => lưu refresh token lên db, không có sẽ fake để lưu refreshToken */
				/* trả về user và token => lưu vào cookie */
				res.cookie('refreshToken', refreshToken, {
					httpOnly: true,
					secure: false,
					path: '/',
					sameSite: 'strict',
				});
				const { password, ...other } = user._doc;
				return res.status(200).json({ accessToken, ...other });
			}
		} catch (error) {
			res.status(500).json(error);
		}
	},

	/* refresh token */
	requestRefreshToken: async (req, res) => {
		try {
			/* take refresh token from user */
			const refreshToken = req.cookies.refreshToken;
			/* if refresh token is not exist */
			if (!refreshToken) {
				return res.status(401).json('You are not authenticated!');
			}
			/* if refresh token is exist, kiểm tra nếu refreshToken này không có refresh của mình thì sẽ báo lỗi */
			if (!refreshTokens.includes(refreshToken)) {
				return res.status(403).json('Refresh token is not valid!');
			}
			/* verify refresh token */
			jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (error, user) => {
				if (error) {
					return res.status(403).json('Refresh token is not valid!');
				}
				refreshTokens = refreshTokens.filter(
					(token) => token !== refreshToken
				); /* => xóa refresh token cũ đi */
				/* if refresh token is valid, create new accessToke & refreshToken */
				const newAccessToken = authControllers.generateAccessToken(user);
				const newRefreshToken = authControllers.generateRefreshToken(user);
				/* => lưu refresh token lên db, không có sẽ fake để lưu refreshToken */
				refreshTokens.push(newRefreshToken);
				/* trả về user và token => lưu vào cookie */
				res.cookie('refreshToken', newRefreshToken, {
					httpOnly: true,
					secure: false,
					path: '/',
					sameSite: 'strict',
				});
				return res.status(200).json({ accessToken: newAccessToken });
			}); /* verify xem refresh toke này có đúng không? */
		} catch (error) {
			return res.status(500).json(error);
		}
	},

	/* logout */
	logoutUser: async (req, res) => {
		/* làm cho access & refresh token biến mất */
		/* accessToken được lưu trữ bên trong redux clinet nên bên client sẽ xóa accessToken */
		res.clearCookie('refreshToken'); // => xóa refresh token trong cookie
		refreshTokens = refreshTokens.filter(
			(token) => token !== req.cookies.refreshToken
		); // => xóa refresh token trong db || fake db
		return res.status(200).json('Logout successfully!');
	},
};
