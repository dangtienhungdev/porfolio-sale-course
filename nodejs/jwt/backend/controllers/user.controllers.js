import User from '../models/users.model.js';

export const userControllers = {
	/* get all users */
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json(error);
		}
	},
	/* delete one user */
	deleteUser: async (req, res) => {
		try {
			const userId = req.params.id;
			const user = await User.findByIdAndDelete(userId);
			res.status(200).json({
				message: 'User has been deleted',
				user,
			});
		} catch (error) {
			res.status(500).json(error);
		}
	},
};
