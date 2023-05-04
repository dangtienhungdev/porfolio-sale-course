import Category from '../models/categories';
import { categorySchema } from '../validates/categories.validate';
import slugify from 'slugify';

export const categoryController = {
	/* create */
	create: async (req, res) => {
		try {
			const body = req.body;
			/* validate */
			const error = await categorySchema.validate(body, { abortEarly: false });
			if (!error) {
				return res.status(400).json({ message: error.errors });
			}
			/* create */
			const slug = slugify(body.name, {
				lower: true,
				trim: true,
				locale: 'vi',
			});
			const data = { ...body, slug };
			const category = await Category.create(data);
			return res.status(201).json(category);
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
	/* get all */
	getAll: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = { page: _page, limit: _limit };
			if (q) {
				const categories = await Category.paginate(
					{
						$or: [{ name: { $regex: q, $options: 'i' } }],
					},
					options
				);
				return res.status(200).json(categories);
			}
			const categories = await Category.paginate({}, options);
			if (!categories) {
				return res.status(404).json({ message: 'Not found' });
			}
			return res.status(200).json(categories);
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
	/* get one */
	getOne: async (req, res) => {
		try {
			const { id } = req.params;
			const category = await Category.findById(id);
			if (!category) {
				return res.status(404).json({ message: 'Not found' });
			}
			return res.status(200).json(category);
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
			await categorySchema.validate(body, { abortEarly: false });
			/* update */
			const slug = slugify(body.name, {
				lower: true,
				trim: true,
				locale: 'vi',
			});
			const data = { ...body, slug };
			const category = await Category.findByIdAndUpdate(id, data, {
				new: true,
			});
			if (!category) {
				return res.status(404).json({ message: 'Not found' });
			}
			return res.status(200).json(category);
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
	/* delete */
	delete: async (req, res) => {
		try {
			const category = await Category.findByIdAndDelete(req.params.id);
			if (!category) {
				return res.status(404).json({ message: 'Not found' });
			}
			return res.status(200).json({ message: 'Delete success' });
		} catch (error) {
			return res.status(500).json({ message: error.errors });
		}
	},
};
