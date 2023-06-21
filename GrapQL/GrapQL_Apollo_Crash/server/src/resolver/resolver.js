import { authors } from '../data/authors.js';
import { books } from '../data/books.js';

const resolvers = {
  /* Query => truy xuất dữ liệu */
  Query: {
    books: async (_, __, context) => {
      return await context.bookController.getBooks();
    },
    book: (_, args, context) => {
      return context.bookController.getBookById(args.id);
    },
    authors: async (_, __, context) => {
      return await context.authorController.getAuthors();
    },
    author: async (_, args, context) => {
      return await context.authorController.getAuthorById(args.id);
    },
  },
  Book: {
    author: async (parent, _, context) => {
      return await context.authorController.getAuthorById(parent.authorId);
    },
  },
  Author: {
    book: async (parent, _, context) => {
      return await context.bookController.getBooks({ authorId: parent.id });
    },
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
