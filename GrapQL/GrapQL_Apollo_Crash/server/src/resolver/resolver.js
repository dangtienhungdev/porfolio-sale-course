import { authors } from '../data/authors.js';
import { books } from '../data/books.js';

const resolvers = {
  /* Query => truy xuất dữ liệu */
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id.toString() === args.id),
    authors: () => authors,
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
    createAuthor: (parent, args) => {
      const { id, name, age } = args;
      const author = { id, name, age };
      authors.push(author);
      return author;
    },
    createBook: (parent, args) => {
      const { id, name, genre, authorId } = args;
      const book = { id, name, genre, authorId };
      // books.push(book);
      return book;
    },
  },
};

export default resolvers;
