import * as dotenv from 'dotenv';

import User from '../models/users.model';
import jwt from 'jsonwebtoken';

dotenv.config();

export const userMiddlewares = {
	/* verify token admin */
	verifyTokenAdmin: async (req, res, next) => {
		try {
			if (!req.headers.authorization) {
				return res.status(401).json({ msg: 'Unauthorized' });
			}
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				return res.status(401).json({ msg: 'Unauthorized' });
			}
			jwt.verify(
				token,
				process.env.ACCESS_TOKEN_SECRET,
				async (err, decode) => {
					if (err) {
						return res.status(401).json({ msg: 'Unauthorized' });
					}
					/* get user */
					const user = await User.findById(decode._id);
					if (!user) {
						return res.status(401).json({ msg: 'Unauthorized' });
					}
					req.user = user;
					next();
				}
			);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
};

export const checkAdmin = (req, res, next) => {
	try {
		const user = req.user;
		/* check role */
		if (user.role !== 'admin' || user.role !== 'superadmin') {
			return res.status(401).json({ msg: 'Unauthorized' });
		}
		next();
	} catch (error) {
		return res.status(500).json({ msg: error.message });
	}
};
