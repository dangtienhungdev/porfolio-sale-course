import Category from '../models/category.model.js';
import Project from '../models/project.model.js';
import User from '../models/user.model.js';
import { projectValidate } from '../validates/project.validate.js';

export const projectController = {
  create: async (req, res) => {
    try {
      const body = req.body;
      /* validate */
      await projectValidate.validate(body, { abortEarly: false });
      /* check category */
      const categoryExits = await Category.findById(body.category);
      if (!categoryExits) {
        return res.status(400).json({ message: 'Category not found' });
      }
      /* check user */
      const userExits = await User.findById(body.user);
      if (!userExits) {
        return res.status(400).json({ message: 'User not found' });
      }
      /* create */
      const project = await Project.create(body);
      if (!project) {
        return res.status(400).json({ message: 'Create project failed' });
      }
      /* update category */
      await Category.findByIdAndUpdate(body.category, { $push: { projects: project._id } });
      /* update user */
      await User.findByIdAndUpdate(body.user, { $push: { projects: project._id } });
      /* response */
      return res.status(200).json({ message: 'Create project successfully', project });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.errors });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  /* delete */
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      /* check project/category/user */
      const projectExits = await Project.findById(id);
      if (!projectExits) {
        return res.status(400).json({ message: 'Project not found' });
      }
      /* delete */
      const project = await Project.findByIdAndDelete(id);
      if (!project) {
        return res.status(400).json({ message: 'Delete project failed' });
      }
      /* update category */
      await Category.findByIdAndUpdate(project.category, { $pull: { projects: project._id } });
      /* update user */
      await User.findByIdAndUpdate(project.user, { $pull: { projects: project._id } });
      /* response */
      return res.status(200).json({ message: 'Delete project successfully', project });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  /* get all */
  getAll: async (_, res) => {
    try {
      const options = {
        populate: [
          { path: 'category', select: '-projects' },
          { path: 'user', select: '-projects -password -socials' },
        ],
      };
      const projects = await Project.paginate({}, options);
      if (!projects) {
        return res.status(400).json({ message: 'Get projects failed' });
      }
      return res.status(200).json({ message: 'Get projects successfully', projects });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  /* get one */
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const project = await Project.findById(id).populate([
        { path: 'category', select: '-projects' },
        {
          path: 'user',
          select: '-projects -password',
          populate: { path: 'socials', select: '-user' },
        },
      ]);
      if (!project) {
        return res.status(400).json({ message: 'Get project failed' });
      }
      return res.status(200).json({ message: 'Get project successfully', project });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      /* validate */
      await projectValidate.validate(body, { abortEarly: false });
      /* check project/category/user */
      const projectExits = await Project.findById(id);
      if (!projectExits) {
        return res.status(400).json({ message: 'Project not found' });
      }
      const category = await Category.findById(body.category);
      if (!category) {
        return res.status(400).json({ message: 'Category not found' });
      }
      const user = await User.findById(body.user);
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      /* update */
      const project = await Project.findByIdAndUpdate(id, body, { new: true });
      if (!project) {
        return res.status(400).json({ message: 'Update project failed' });
      }
      /* update category */
      await Category.findByIdAndUpdate(project.category, { $pull: { projects: project._id } });
      await Category.findByIdAndUpdate(project.category, {
        $addToSet: { projects: project._id },
      });
      /* update user */
      await User.findByIdAndUpdate(project.user, { $pull: { projects: project._id } });
      await User.findByIdAndUpdate(project.user, { $addToSet: { projects: project._id } });
      /* response */
      return res.status(200).json({ message: 'Update project successfully', project });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.errors });
      }
      return res.status(500).json({ message: error.message });
    }
  },
};
