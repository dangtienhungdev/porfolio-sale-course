import { authors } from '../data/authors.js';
import { books } from '../data/books.js';

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id.toString() === args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id.toString() === args.id),
  },
  Book: {
    author: (parent, args) => authors.find((author) => author.id === parent.id),
  },
  Author: {
    book: (parent, args) => books.filter((book) => book.authorId === parent.id),
  },
};

export default resolvers;
