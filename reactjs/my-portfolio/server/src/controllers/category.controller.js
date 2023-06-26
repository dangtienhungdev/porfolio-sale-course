import Category from '../models/category.model.js';

export const categoryController = {
  /* getAll */
  getAll: async (_, res) => {
    try {
      const categories = await Category.find();
      return res.status(200).json({ data: categories });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
