import User from '../models/user.model.js';

export const userController = {
  /* getAll */
  getAll: async (_, res) => {
    try {
      const users = await User.find();
      return res.status(200).json({ data: users });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
