import Food from '../models/foods.model';
import Review from '../models/reviews.model';
import { reviewValidate } from '../validates/reviews.validate';

export const reviewControllers = {
	/* create */
	createReview: async (req, res) => {
		try {
			const body = req.body;
			/* validte */
			await reviewValidate.validate(body, { abortEarly: false });
			/* create */
			const review = await Review.create(body);
			/* update food */
			await Food.findByIdAndUpdate(body.foodId, {
				$addToSet: { reviews: review._id },
			});
			return res.status(201).json({ review });
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
	/* get All */
	getAllReviews: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = {
				page: _page,
				limit: _limit,
				sort: { createdAt: -1 },
				populate: [
					{ path: 'userId', select: 'name' },
					{ path: 'foodId', select: 'name' },
				],
			};
			/* nếu có tìm tiếm */
			if (q) {
				const reviews = await Review.paginate(
					{ $comment: { $or: [{ $regex: q, $options: 'i' }] } },
					options
				);
				return res.status(200).json({ reviews });
			}
			const reviews = await Review.paginate({}, options);
			return res.status(200).json({ reviews });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* get One */
	getOneReview: async (req, res) => {
		try {
			const { id } = req.params;
			const review = await Review.findById(id)
				.populate('userId')
				.populate('foodId');
			if (!review) {
				return res.status(404).json({ message: 'Review not found' });
			}
			return res.status(200).json({ review });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* update */
	updateReview: async (req, res) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const review = await Review.findByIdAndUpdate(id, body, { new: true });
			if (!review) {
				return res.status(404).json({ message: 'Review not found' });
			}
			/* delete food */
			await Food.findByIdAndUpdate(body.foodId, {
				$pull: { reviews: review._id },
			});
			/* update reivew vào food */
			const foodId = body.foodId;
			if (foodId) {
				await Food.findByIdAndUpdate(foodId, {
					$addToSet: { reviews: review._id },
				});
			}
			return res.status(200).json({ review });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	/* delete */
	deleteReview: async (req, res) => {
		try {
			const { id } = req.params;
			const review = await Review.findByIdAndDelete(id);
			if (!review) {
				return res.status(404).json({ message: 'Review not found' });
			}
			/* delete food */
			await Food.findByIdAndUpdate(review.foodId, {
				$pull: { reviews: review._id },
			});
			return res.status(200).json({ review });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
};
