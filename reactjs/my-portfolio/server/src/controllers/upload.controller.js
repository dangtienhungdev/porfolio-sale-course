import cloudinary from '../configs/cloudinary.config.js';

export const uploadController = {
  /* upload hình ảnh */
  uploadImages: async (req, res) => {
    try {
      const files = req.files;
      if (!Array.isArray(files)) {
        return res.status(400).json({ msg: 'Không tìm thấy hình ảnh.' });
      }
      const uploadPromise = files.map((file) => {
        return cloudinary.uploader.upload(file.path);
      });
      const results = await Promise.all(uploadPromise);
      const uploadFiles = results.map((result) => {
        return {
          public_id: result.public_id,
          url: result.secure_url,
        };
      });
      return res.status(200).send({ urls: uploadFiles });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  /* delete images */
  deleteImage: async (req, res) => {
    try {
      const publicId = req.params.public_id;
      if (!publicId) {
        return res.status(400).send({ message: 'Public id is not correct' });
      }
      const result = await cloudinary.uploader.destroy(publicId);
      console.log('🚀 ~ file: upload.controller.js:34 ~ deleteImage: ~ result:', result);
      if (result.result !== 'ok') {
        return res.status(400).send({ message: 'Delete image is not correct', urls: result });
      }
      return res.status(200).send({ message: 'Delete image successfully' });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
