import * as dotenv from 'dotenv';

import { userLogin, userRegister } from '../validates/Users.validate';

import User from '../models/users.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

let refreshTokens = [];

export const authController = {
	/* register */
	register: async (req, res) => {
		try {
			const body = req.body;
			/* validate */
			const error = await userRegister.validate(body, {
				abortEarly: false,
			});
			if (!error) {
				return res.status(400).json({ msg: error.message });
			}
			/* check exists */
			const userExists = await User.findOne({ email: body.email });
			if (userExists) {
				return res.status(400).json({ msg: 'Email already exists' });
			}
			/* hash password */
			const salt = await bcrypt.genSalt(10);
			const hashPassword = await bcrypt.hash(body.password, salt);
			body.password = hashPassword;
			/* create user */
			const user = await User.create(body);
			return res.status(201).json({ msg: 'User created', user });
		} catch (error) {
			return res.status(500).json({ msg: error.errors });
		}
	},
	/* generic accessToken  */
	generateAccessToken: (user) => {
		return jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: '30s',
		});
	},
	/* generic refreshToken */
	generateRefreshToken: (user) => {
		return jwt.sign({ _id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
			expiresIn: '1d',
		});
	},
	/* login */
	login: async (req, res) => {
		try {
			const body = req.body;
			/* validate */
			const error = await userLogin.validate(body, { abortEarly: false });
			if (!error) {
				return res.status(400).json({ msg: error.message });
			}
			/* check exists */
			const userExists = await User.findOne({ email: body.email });
			if (!userExists) {
				return res.status(400).json({ msg: 'Email not exists' });
			}
			/* compare password */
			const validPassword = await bcrypt.compare(
				body.password,
				userExists.password
			);
			if (!validPassword) {
				return res.status(400).json({ msg: 'Password incorrect' });
			}
			if (userExists && validPassword) {
				/* create token */
				const accessToken = authController.generateAccessToken(userExists);
				const refreshToken = authController.generateRefreshToken(userExists);
				/* save token */
				refreshTokens.push(refreshToken);
				/* trả về user và token => lưu token vào cookie */
				res.cookie('refreshToken', refreshToken, {
					httpOnly: true,
					secure: false,
					path: '/',
					sameSite: 'strict',
				});
				const { password, ...user } = userExists._doc;
				return res
					.status(200)
					.json({ msg: 'Login success', accessToken, user });
			}
		} catch (error) {
			return res.status(500).json({ msg: error.errors });
		}
	},
	/* refresh token */
	requestRefreshToken: async (req, res) => {
		try {
			const refreshToken = req.cookies.refreshToken;
			/* check token */
			if (!refreshToken) {
				return res.status(401).json({ msg: 'Not authorized' });
			}
			/* check token in array */
			if (!refreshTokens.includes(refreshToken)) {
				return res.status(403).json({ msg: 'Forbidden' });
			}
			/* verify token */
			jwt.verify(
				refreshToken,
				process.env.REFRESH_TOKEN_SECRET,
				async (error, decode) => {
					if (error) {
						return res.status(403).json({ msg: 'Forbidden' });
					}
					refreshTokens = refreshTokens.filter(
						(token) => token !== refreshToken
					);
					/* create token */
					const user = await User.findById(decode._id);
					if (!user) {
						return res.status(403).json({ msg: 'Forbidden' });
					}
					const newAccessToken = authController.generateAccessToken(user);
					const newRefreshToken = authController.generateRefreshToken(user);
					/* save token */
					refreshTokens.push(newRefreshToken);
					/* trả về user và token => lưu token vào cookie */
					res.cookie('refreshToken', newRefreshToken, {
						httpOnly: true,
						path: '/',
						sameSite: 'none',
						secure: false,
					});
					return res.status(200).json({ accessToken: newAccessToken });
				}
			);
		} catch (error) {
			return res.status(500).json({ msg: 'Lỗi refresh token' });
		}
	},
	/* logout */
	logout: async (req, res) => {
		try {
			const refreshToken = req.cookies.refreshToken;
			/* remove token */
			refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
			/* remove cookie */
			res.clearCookie('refreshToken');
			return res.status(200).json({ msg: 'Logout success' });
		} catch (error) {
			return res.status(500).json({ msg: 'Error' });
		}
	},
};
