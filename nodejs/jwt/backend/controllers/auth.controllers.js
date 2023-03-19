import User from '../models/users.model.js';
import bcrypt from 'bcrypt'; // => mã hóa mật khẩu
import jwt from 'jsonwebtoken'; // => tạo token

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
	/* login */
	loginUser: async (req, res) => {
		try {
			/* tìm người dùng trùng với username người dùng gửi lên server */
			const user = await User.findOne({ username: req.body.username });
			if (!user) {
				/* nếu không có người dùng thì sẽ trả về 404 */
				res.status(404).json('User not found');
			}
			/* so sánh mật khẩu người dùng gửi lên server với mật khẩu trong database */
			const validPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!validPassword) {
				/* nếu mật khẩu không đúng thì sẽ trả về 404 */
				res.status(400).json('Wrong password');
			}
			/* nếu username & password đúng thì trả về 200 */
			if (user && validPassword) {
				const accessToken = jwt.sign(
					{
						id: user._id,
						admin: user.admin,
					},
					process.env.JWT_ACCESS_KEY, // => key để mã hóa token
					{ expiresIn: '30s' } // => thời gian tồn tại của token
				);
				const { password, ...other } = user._doc;
				res.status(200).json({ accessToken, user: other });
			}
		} catch (error) {
			res.status(500).json(error);
		}
	},
};
