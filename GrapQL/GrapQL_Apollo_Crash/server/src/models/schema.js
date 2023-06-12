import { gql } from 'apollo-server-express';

const typeDefs = gql/* GraphQL */ `
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }
  type Author {
    id: ID
    name: String
    age: Int
    book: [Book]
  }

  # Root Type
  type Query {
    books: [Book]
    book(id: ID): Book
    authors: [Author]
    author(id: ID): Author
  }
`;

export default typeDefs;
