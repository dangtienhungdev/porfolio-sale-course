import * as dotenv from 'dotenv';

import jwt from 'jsonwebtoken';

dotenv.config();

export const checkUser = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			return res.status(401).json({ message: 'Unauthorized' });
		}
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
			if (err) {
				return res.status(401).json({ message: 'Unauthorized' });
			}
			console.log(
				'🚀 ~ file: checkUser.js:17 ~ jwt.decode ~ decoded:',
				decoded
			);
		});
		next();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
