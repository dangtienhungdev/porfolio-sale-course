import User from '../models/users.model';

export const userController = {
	/* get All */
	getAll: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = {
				page: _page,
				limit: _limit,
			};
			/* nếu có tìm kiếm thì sẽ trả về theo giá trị tìm kiếm */
			if (q) {
				const querySearch = {
					$or: [
						{ name: { $regex: q, $options: 'i' } },
						{ email: { $regex: q, $options: 'i' } },
					],
				};
				const users = await User.paginate(querySearch, options);
				return res.status(200).json({ users });
			}
			const users = await User.paginate({}, options);
			/* bỏ password khi trả về cho người dùng */
			const sanitizeUser = users.docs.map((user) => {
				const { password, ...rest } = user._doc;
				return rest;
			});
			return res.status(200).json({ users: sanitizeUser });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* get One */
	getOne: async (req, res) => {
		try {
			const user = await User.findById(req.params.id);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			const { password, ...rest } = user._doc;
			return res.status(200).json({ user: rest });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* update users */
	update: async (req, res) => {
		try {
			const body = req.body;
			const id = req.params.id;
			const user = await User.findByIdAndUpdate(id, body, { new: true });
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			return res.status(200).json({ user });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* delete users */
	delete: async (req, res) => {
		try {
			const id = req.params.id;
			const user = await User.findByIdAndDelete(id);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			return res.status(200).json({ user });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
};
