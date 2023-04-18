import Payment from '../models/payments.model';
import User from '../models/users.model';
import { paymentValidate } from '../validates/payment.validate';

export const paymentController = {
	/* create */
	create: async (req, res) => {
		try {
			const body = req.body;
			/* validate */
			await paymentValidate.validate(body, { abortEarly: false });
			/* create */
			const payment = await Payment.create(body);
			/* update id người dùng */
			await User.findByIdAndUpdate(body.userId, {
				paymentMethodId: payment._id,
			});
			return res.status(201).json({ payment });
		} catch (error) {
			if (error.errors) {
				return res.status(500).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* get All */
	getAll: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = { page: _page, limit: _limit };
			/* search */
			if (q) {
				const option = {
					$or: [
						{ cardNumber: { $regex: q, $options: 'i' } },
						{ cardName: { $regex: q, $options: 'i' } },
						{ cardExpiry: { $regex: q, $options: 'i' } },
					],
				};
				const payments = await Payment.paginate(option, options);
				return res.status(200).json({ payments });
			}
			const payments = await Payment.paginate({}, options);
			return res.status(200).json({ payments });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* get One */
	getOne: async (req, res) => {
		try {
			const id = req.params.id;
			const payment = await Payment.findById(id).populate('userId', 'name');
			if (!payment) {
				return res.status(404).json({ message: 'Not Found' });
			}
			return res.status(200).json({ payment });
		} catch (error) {
			if (error.errors) {
				return res.status(500).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* update */
	update: async (req, res) => {
		try {
			const body = req.body;
			const id = req.params.id;
			/* validate */
			await paymentValidate.validate(body, { abortEarly: false });
			/* update */
			const paymentUpdate = await Payment.findByIdAndUpdate(id, body, {
				new: true,
			});
			if (!paymentUpdate) {
				return res.status(404).json({ message: 'Not Found' });
			}
			return res.status(200).json({ payment: paymentUpdate });
		} catch (error) {
			if (error.errors) {
				return res.status(500).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* delete */
	delete: async (req, res) => {
		try {
			const id = req.params.id;
			const payment = await Payment.findByIdAndDelete(id);
			if (!payment) {
				return res.status(404).json({ message: 'Not Found' });
			}
			/* xóa id người dùng */
			await User.findByIdAndUpdate(payment.userId, {
				$set: { paymentMethodId: null },
			});
			return res.status(200).json({ message: 'Delete Success' });
		} catch (error) {
			if (error.errors) {
				return res.status(500).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
};
