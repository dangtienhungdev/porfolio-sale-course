import jwt from 'jsonwebtoken';

const middlewareControllers = {
	/* verify token */
	verifyToken: async (req, res, next) => {
		try {
			const token = req.headers.token;
			if (token) {
				const accessToken = token.split(' ')[1];
				jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (error, user) => {
					if (error) {
						/* nếu mà có lỗi => bạn không phải là người dùng đó || token đã hết hạn */
						return res.status(403).json('Token is not valid');
					}
					req.user = user;
					next();
				});
			} else {
				/* nếu không có token => bạn không phải là người dùng đó */
				return res.status(401).json('You are not authenticated');
			}
		} catch (error) {
			return res.status(500).json({ error: error });
		}
	},
	/* verify admin */
	verifyTokenAndAdminAuth: async (req, res, next) => {
		middlewareControllers.verifyToken(req, res, () => {
			if (req.user.id === req.params.id || req.user.admin) {
				next();
			} else {
				return res.status(403).json('You are not allowed to do that!');
			}
		});
	},
};

export default middlewareControllers;
