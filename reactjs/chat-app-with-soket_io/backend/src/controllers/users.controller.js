import * as dotenv from 'dotenv';

import User from '../models/users.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const generateAccessToken = (user) => {
	return jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '1d',
	});
};

export const register = async (req, res) => {
	try {
		const body = req.body;
		const emailExist = await User.findOne({ email: body.email });
		if (emailExist) {
			return res.status(400).json({ message: 'Email already exists' });
		}
		/* hash password */
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(body.password, salt);
		body.password = hashPassword;
		/* create new user */
		const user = await User.create(body);
		/* generate token */
		const accessToken = generateAccessToken(user);
		const { password, ...info } = user._doc;
		return res
			.status(201)
			.json({ message: 'User created successfully', accessToken, user: info });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const login = async (req, res) => {
	try {
		const body = req.body;
		const emailExist = await User.findOne({ email: body.email });
		if (!emailExist) {
			return res.status(400).json({ message: 'Email does not exist' });
		}
		/* check password */
		const validPassword = await bcrypt.compare(
			body.password,
			emailExist.password
		);
		if (!validPassword) {
			return res.status(400).json({ message: 'Password is not correct' });
		}
		if (validPassword && emailExist) {
			/* generate token */
			const accessToken = generateAccessToken(emailExist);
			const { password, ...info } = emailExist._doc;
			return res
				.status(200)
				.json({ message: 'Login successfully', accessToken, user: info });
		}
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const checkToken = async (req, res, next) => {
	/* chưa hoàn thành */
	try {
		const token = req.headers.authorization.split(' ')[1];
		console.log(
			'🚀 ~ file: users.controller.js:70 ~ checkToken ~ token:',
			token
		);
		if (!token) {
			return res.status(401).json({ message: 'Unauthorized' });
		}
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
			if (err) {
				return res.status(403).json({ message: 'Forbidden' });
			}
			console.log(
				'🚀 ~ file: users.controller.js:78 ~ jwt.verify ~ decoded:',
				decoded
			);
		});
		next();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
