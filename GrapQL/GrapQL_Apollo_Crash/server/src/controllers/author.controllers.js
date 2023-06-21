import Author from '../models/Author.model.js';

export const authorController = {
  getAuthors: async () => {
    try {
      const authors = await Author.find();
      return authors;
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createAuthor: async (args) => {
    try {
      const newAuthor = new Author(args);
      return await newAuthor.save();
    } catch (error) {
      return error;
    }
  },
  getAuthorById: async (id) => {
    try {
      const author = await Author.findById(id);
      if (!author) {
        throw new Error('Author not found');
      }
      return author;
    } catch (error) {
      return error;
    }
  },
};
