import { qgl } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
  }

  # Root Query
  type Query {
    books: [Book]
  }
`;

export default typeDefs;
