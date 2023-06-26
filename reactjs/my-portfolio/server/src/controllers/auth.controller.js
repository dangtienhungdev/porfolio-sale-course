import { loginValidate, registerValidate } from '../validates/auth.validate.js';

import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import slugify from 'slugify';

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
      /* check avatar */
      const avatar = body.avatar ? body.avatar : `https://api.multiavatar.com/${body.username}.png`;
      body.avatar = avatar;
      /* slug */
      const slug = slugify(body.username, { lower: true });
      body.slug = slug;
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
  /* login */
  login: async (req, res) => {
    try {
      const body = req.body;
      /* validate */
      await loginValidate.validate(body, { abortEarly: false });
      /* check email */
      const emailExist = await User.findOne({ email: body.email });
      if (!emailExist) {
        return res.status(400).json({ message: 'Email is not found' });
      }
      /* check password */
      const validPassword = await bcrypt.compare(body.password, emailExist.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Password is not found' });
      }
      /* create token */
      const token = await authController.generateToken(emailExist);
      if (!token) {
        return res.status(500).json({ message: 'Token is not found' });
      }
      const { password, project, role, ...info } = emailExist._doc;
      return res.status(200).json({ accessToken: token, data: info });
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.errors });
      }
      return res.status(500).json({ message: error.message });
    }
  },
  generateToken: async (user) => {
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' });
    return token;
  },
  refreshToken: async (user) => {
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' });
    return token;
  },
};
