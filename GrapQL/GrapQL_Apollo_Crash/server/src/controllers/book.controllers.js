import Author from '../models/Author.model.js';
import Book from '../models/Book.model.js';

export const bookController = {
  getBooks: async () => {
    try {
      const books = await Book.find();
      return books;
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
