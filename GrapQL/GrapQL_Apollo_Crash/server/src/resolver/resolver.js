import Author from '../models/Author.model.js';
import Book from '../models/Book.model.js';
import { authors } from '../data/authors.js';
import { books } from '../data/books.js';

const resolvers = {
  /* Query => truy xuất dữ liệu */
  Query: {
    books: async (parent, args, context) => {
      return await context.bookController.getBooks();
    },
    book: (parent, args) => books.find((book) => book.id.toString() === args.id),
    authors: async (parent, args, context) => {
      return await context.authorController.getAuthors();
    },
    author: (parent, args) => authors.find((author) => author.id.toString() == args.id),
  },
  Book: {
    author: (parent, args) =>
      authors.find((author) => {
        return author.id.toString() === parent.authorId.toString();
      }),
  },
  Author: {
    book: (parent, args) => books.filter((book) => book.authorId == parent.id),
  },
  /* Mutation => thêm, sửa, xóa dữ liệu */
  Mutation: {
    createAuthor: async (_, args, context) => {
      return await context.authorController.createAuthor(args);
    },
    createBook: async (_, args, context) => {
      return await context.bookController.createBook(args);
    },
  },
};

export default resolvers;
