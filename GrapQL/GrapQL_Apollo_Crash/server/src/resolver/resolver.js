const resolvers = {
  Query: {
    books: () => [
      { id: 1, name: 'Name of the Wind', genre: 'Fantasy' },
      { id: 2, name: 'The Final Empire', genre: 'Fantasy' },
      { id: 3, name: 'The Long Earth', genre: 'Sci-Fi' },
    ],
  },
};

export default resolvers;
