import * as dotenv from 'dotenv';

import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

dotenv.config();

export const checkPermisstion = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return req.status(401).json({ message: 'Unauthorized' });
    }
    const abc = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log('🚀 ~ file: checkPermision.middlewares.js:18 ~ checkPermisstion ~ abc:', abc);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
