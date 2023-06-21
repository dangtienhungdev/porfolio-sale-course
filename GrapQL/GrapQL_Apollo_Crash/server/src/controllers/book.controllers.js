import Book from '../models/Book.model.js';

export const bookController = {
  getBooks: async (condition = null) => {
    try {
      const books = condition === null ? await Book.find() : await Book.find(condition);
      return books;
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createBook: async (args) => {
    try {
      const newBook = new Book(args);
      return await newBook.save();
    } catch (error) {
      return error;
    }
  },
  getBookById: async (id) => {
    try {
      const book = await Book.findById(id);
      if (!book) {
        throw new Error('Book not found');
      }
      return book;
    } catch (error) {
      return error;
    }
  },
};
