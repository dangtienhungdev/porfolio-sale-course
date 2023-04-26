import Category from '../models/categories';
import Food from '../models/foods.model';
import { foodSchema } from '../validates/foods.validate';

export const foodController = {
	/* create */
	create: async (req, res) => {
		try {
			const body = req.body;
			/* validate */
			await foodSchema.validate(body, { abortEarly: false });
			/* create */
			const foods = await Food.create(body);
			/* update category */
			await Category.findByIdAndUpdate(body.categoryId, {
				$addToSet: { foods: foods._id },
			});
			return res.status(200).json({ foods });
		} catch (error) {
			if (error.errors) {
				return res.status(500).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* get all */
	getAll: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = {
				page: _page,
				limit: _limit,
				populate: [{ path: 'categoryId', select: 'name' }],
			};
			if (q) {
				const foods = await Food.paginate(
					{
						$or: [
							{ name: { $regex: q, $options: 'i' } },
							{ description: { $regex: q, $options: 'i' } },
						],
					},
					options
				);
				return res.status(200).json({ foods });
			}
			const foods = await Food.paginate({}, options);
			if (!foods) {
				return res.status(404).json({ message: 'Not found' });
			}
			return res.status(200).json({ foods });
		} catch (error) {
			if (error.errors) {
				return res.status(500).json({ message: error.errors });
			}
			return res.status(500).json({ message: 'Server error' });
		}
	},
	/* get one */
	getOne: async (req, res) => {
		try {
			const { id } = req.params;
			const food = await Food.findById(id);
			if (!food) {
				return res.status(404).json({ message: 'Not found' });
			}
			return res.status(200).json({ food });
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
	/* update */
	update: async (req, res) => {
		try {
			const { id } = req.params;
			const body = req.body;
			/* validate */
			await foodSchema.validate(body, { abortEarly: false });
			/* update */
			const food = await Food.findByIdAndUpdate(id, body, { new: true });
			if (!food) {
				return res.status(404).json({ message: 'Not found' });
			}
			/* xóa sản phẩm cũ ra khỏi danh sách products của category */
			await Category.findByIdAndUpdate(food.categoryId, {
				$pull: { foods: food._id },
			});
			/* thêm sản phẩm mới vào danh sách products của category */
			const categoryId = body.categoryId;
			if (categoryId) {
				await Category.findByIdAndUpdate(categoryId, {
					$addToSet: { foods: food._id },
				});
			}
			return res.status(200).json({ food });
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
	/* delete */
	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const food = await Food.findByIdAndDelete(id);
			if (!food) {
				return res.status(404).json({ message: 'Not found' });
			}
			/* delete product from category */
			await Category.findByIdAndUpdate(food.categoryId, {
				$pull: { foods: food._id },
			});
			return res.status(200).json({ food });
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
};
