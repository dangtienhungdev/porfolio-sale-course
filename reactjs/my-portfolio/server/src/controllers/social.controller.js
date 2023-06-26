import Social from '../models/social.model.js';
import User from '../models/user.model.js';
import { socialValidate } from '../validates/social.validate.js';

export const socialController = {
  create: async (req, res) => {
    try {
      const body = req.body;
      /* validate */
      await socialValidate.validate(body, { abortEarly: false });
      /* check user */
      const user = await User.findById(body.user);
      if (!user) {
        return res.status(400).json({ message: 'User is not exist' });
      }
      /* create social */
      const social = await Social.create(body);
      /* update user */
      await User.findByIdAndUpdate(body.user, {
        $push: { socials: social._id },
      });
      return res.status(200).json({ data: social });
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
  getAll: async (_, res) => {
    try {
      const socials = await Social.paginate();
      socials.docs = socials.docs.map((social) => {
        const { user, ...rest } = social._doc;
        return rest;
      });
      return res.status(200).json({ data: socials });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const social = await Social.findById(req.params.id).populate({
        path: 'user',
        select: '-password -socials',
      });
      if (!social) {
        return res.status(404).json({ message: 'Social not found' });
      }
      return res.status(200).json({ data: social });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      /* validate */
      await socialValidate.validate(body, { abortEarly: false });
      /* check user */
      const user = await User.findById(body.user);
      if (!user) {
        return res.status(400).json({ message: 'User is not exist' });
      }
      /* update social */
      const social = await Social.findByIdAndUpdate(id, body, { new: true });
      if (!social) {
        return res.status(404).json({ message: 'Social not found' });
      }
      /* delete social */
      await User.findByIdAndUpdate(social.user, {
        $pull: { socials: social._id },
      });
      /* update user */
      await User.findByIdAndUpdate(social.user, {
        $push: { socials: social._id },
      });
      return res.status(200).json({ data: social });
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
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      /* delete social */
      const social = await Social.findByIdAndDelete(id);
      if (!social) {
        return res.status(404).json({ message: 'Social not found' });
      }
      /* update user */
      await User.findByIdAndUpdate(social.user, {
        $pull: { socials: social._id },
      });
      return res.status(200).json({ data: social });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
