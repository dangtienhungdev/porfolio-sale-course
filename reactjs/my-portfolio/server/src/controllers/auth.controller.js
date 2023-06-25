import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { registerValidate } from '../validates/auth.validate.js';

export const authController = {
  /* create */
  register: async (req, res) => {
    try {
      const body = req.body;
      /* validate */
      await registerValidate.validate(body, { abortEarly: false });
      /* check email */
      const userExits = await User.findOne({ email: body.email });
      if (userExits) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      /* hash password */
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
      /* create user */
      const user = await User.create(body);
      return res.status(201).json({ data: user });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.errors });
      }
      if (error.name === 'MongoError') {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  },
};
