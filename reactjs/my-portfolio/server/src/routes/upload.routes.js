import * as dotenv from 'dotenv';

import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../configs/cloudinary.config.js';
import express from 'express';
import multer from 'multer';
import { uploadController } from '../controllers/upload.controller.js';

dotenv.config();

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: process.env.CLOUDINARY_FOLDER,
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const upload = multer({ storage: storage });

router.post('/images/upload', upload.array('images', 10), uploadController.uploadImages);
router.delete('/images/delete/:public_id', uploadController.deleteImage);

export default router;
