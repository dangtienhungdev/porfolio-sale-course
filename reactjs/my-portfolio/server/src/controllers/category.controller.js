import Category from '../models/category.model.js';
import { categoryValidate } from '../validates/category.validate.js';
import slugify from 'slugify';

export const categoryController = {
  /* getAll */
  getAll: async (_, res) => {
    try {
      const categories = await Category.find();
      return res.status(200).json({ data: categories });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  /* create */
  create: async (req, res) => {
    try {
      const body = req.body;
      /* validate */
      await categoryValidate.validate(body, { abortEarly: false });
      /* create slug */
      const slug = slugify(body.name, { lower: true });
      /* create category */
      const category = { slug, ...body };
      const newCategory = await Category.create(category);
      return res.status(200).json({ data: newCategory });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  /* get one */
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      return res.status(200).json({ data: category });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  /* update */
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      /* validate */
      await categoryValidate.validate(body, { abortEarly: false });
      /* create slug */
      const slug = slugify(body.name, { lower: true });
      /* create category */
      const category = { slug, ...body };
      const newCategory = await Category.findByIdAndUpdate(id, category, { new: true });
      if (!newCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
      return res.status(200).json({ data: newCategory });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
      }
      if (error.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid id' });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  /* delete */
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByIdAndDelete(id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      return res.status(200).json({ data: category });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
