import User from '../models/user.model.js';
import { userValidate } from '../validates/user.validate.js';

export const userController = {
  /* getAll */
  getAll: async (_, res) => {
    try {
      const users = await User.paginate();
      /* remove password */
      users.docs = users.docs.map((user) => {
        const { password, project, ...info } = user._doc;
        return info;
      });
      return res.status(200).json({ data: users });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  /* get one */
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id).populate({
        path: 'socials',
        select: '-user',
      });
      if (!user) {
        return res.status(400).json({ message: 'User is not found' });
      }
      /* remove password */
      const { password, ...info } = user._doc;
      return res.status(200).json({ data: info });
    } catch (error) {
      if (error.name === 'CastError') {
        return res.status(400).json({ message: 'Slug is invalid' });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      /* validate user */
      await userValidate.validate(body, { abortEarly: false });
      /* update user */
      const user = await User.findByIdAndUpdate(id, body, { new: true });
      if (!user) {
        return res.status(400).json({ message: 'User is not found' });
      }
      /* remove password */
      const { password, ...info } = user._doc;
      return res.status(200).json({ data: info });
    } catch (error) {
      if (error.name === 'ValidationError') {
        const errors = {};
        error.inner.forEach((e) => {
          errors[e.path] = e.message;
        });
        return res.status(400).json({ message: errors });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  /* delete */
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(400).json({ message: 'User is not found' });
      }
      return res.status(200).json({ message: 'User is deleted' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
