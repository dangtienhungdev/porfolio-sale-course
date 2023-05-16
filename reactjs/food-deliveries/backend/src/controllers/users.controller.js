import Payment from '../models/payments.model';
import User from '../models/users.model';
import { createUserValidate } from '../validates/users.validate';

export const userController = {
	/* create users */
	create: async (req, res) => {
		try {
			const body = req.body;
			/* validate */
			await createUserValidate.validate(body);
			/* check email */
			const userExist = await User.findOne({ email: body.email });
			if (userExist) {
				return res.status(400).json({ message: 'Email already exists' });
			}
			/* create User */
			const user = await User.create(body);
			if (!user) {
				return res.status(400).json({ message: 'Create user failed' });
			}
			return res.status(200).json({ user });
		} catch (error) {
			if (error.errors) {
				return res.status(400).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* get All */
	getAll: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = {
				page: _page,
				limit: _limit,
				populate: [{ path: 'paymentMethodId', select: '-userId' }],
			};
			/* nếu có tìm kiếm thì sẽ trả về theo giá trị tìm kiếm */
			if (q) {
				const querySearch = {
					$or: [
						{ name: { $regex: q, $options: 'i' } },
						{ email: { $regex: q, $options: 'i' } },
						{ phone: { $regex: q, $options: 'i' } },
					],
				};
				const users = await User.paginate(querySearch, options);
				return res.status(200).json({ users });
			}
			const users = await User.paginate({ delete: false }, options);
			/* bỏ password khi trả về cho người dùng */
			const { docs, ...others } = users;
			const sanitizeUser = docs.map((user) => {
				const { password, ...rest } = user._doc;
				return rest;
			});
			return res.status(200).json({ users: sanitizeUser, ...others });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* get One */
	getOne: async (req, res) => {
		try {
			const user = await User.findById(req.params.id).populate(
				'paymentMethodId'
			);
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
			/* xóa người payment cũ ra khỏi danh sách */
			await Payment.findByIdAndUpdate(user.paymentMethodId, {
				$pull: { userId: id },
			});
			/* Thêm mới ngươi dùng vào dánh sách */
			const paymentMethodId = body.paymentMethodId;
			if (paymentMethodId) {
				await Payment.findByIdAndUpdate(paymentMethodId, {
					$push: { userId: id },
				});
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
			/* compare role admin */
			const userAdmin = await User.findById({ _id: id });
			if (userAdmin.role === 'admin') {
				return res.status(401).json({ message: 'You are not authorized' });
			}
			const user = await User.findByIdAndDelete(id).populate('paymentMethodId');
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			/* xóa tất cả những id trong payment liên quan đến người dùng này */
			await Payment.deleteMany({ _id: { $in: user.paymentMethodId } });
			return res.status(200).json({ user });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* recoverable deletion */
	recoverableDeletion: async (req, res) => {
		try {
			const id = req.params.id;
			const user = await User.findById(id);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			user.delete = true;
			await user.save();
			return res.status(200).json({ user });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* undo delete */
	undeDeleteUser: async (req, res) => {
		try {
			const id = req.params.id;
			const user = await User.findById(id);
			if (!user) {
				return res.status(404).json({ message: 'User not found' });
			}
			if (!user.delete) {
				return res.status(400).json({ message: 'User is not deleted' });
			}
			user.delete = false;
			await user.save();
			res.json({ message: 'User undeleted successfully' });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* get all user deleted */
	getAllUserDeleted: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = {
				page: _page,
				limit: _limit,
				populate: [{ path: 'paymentMethodId', select: '-userId' }],
			};
			/* nếu có tìm kiếm thì sẽ trả về theo giá trị tìm kiếm */
			if (q) {
				const querySearch = {
					$or: [
						{ name: { $regex: q, $options: 'i' } },
						{ email: { $regex: q, $options: 'i' } },
						{ phone: { $regex: q, $options: 'i' } },
					],
					delete: true,
				};
				const users = await User.paginate(querySearch, options);
				return res.status(200).json({ users });
			}
			const users = await User.paginate({ delete: true }, options);
			/* bỏ password khi trả về cho người dùng */
			const { docs, ...others } = users;
			const sanitizeUser = docs.map((user) => {
				const { password, ...rest } = user._doc;
				return rest;
			});
			return res.status(200).json({ users: sanitizeUser, ...others });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* danh sách người bị xóa tạm thời */
	deleteUsersArr: [],
	/* xóa tạm thời người dùng sau 60s không sẽ bị xóa vĩnh viễn */
	deleteUserCannotRecover: async (req, res) => {
		try {
			const id = req.params.id;
			/* lấy ra người dùng */
			const userToDeleted = await User.findById(id);
			if (!userToDeleted) {
				return res.status(404).json({ message: 'User not found' });
			}
			userController.deleteUsersArr.push(userToDeleted);
			/* đếm ngược 60s */
			const timeOutId = setTimeout(async () => {
				/* nếu không óc undo nào thì sẽ xóa vĩnh viễn ở bộ nhớ tạm và trên db*/
				const result = await User.findByIdAndDelete(userToDeleted._id);
				if (!result) {
					return res.status(404).json({ message: 'User not found' });
				} else {
					await Payment.deleteMany({
						_id: { $in: userToDeleted.paymentMethodId },
					});
					console.log('deleted success');
				}
				userController.deleteUsersArr = userController.deleteUsersArr.filter(
					(user) => user._id !== userToDeleted._id
				);
			}, 60000);
			// Gửi về client id của user đã bị xóa để có thể undo nếu muốn
			res.status(200).json({ deleteUser: userToDeleted });
			// Nếu người dùng ấn undo thì hủy thời gian đếm ngược và đưa user trở lại danh sách
			const undoTimeout = 30000;
			req.on(
				'close',
				() => {
					if (res.statusCode === 200) {
						clearTimeout(timeOutId);
						setTimeout(() => {
							userController.deleteUsersArr =
								userController.deleteUsersArr.filter(
									(user) => user._id !== userToDeleted._id
								);
						});
					}
				},
				undoTimeout
			);
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
};
