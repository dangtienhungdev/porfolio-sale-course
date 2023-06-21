import { ApolloServer } from 'apollo-server-express';
import { bookController } from './controllers/book.controllers.js';
import express from 'express';
import mongoose from 'mongoose';
import resolvers from './resolver/resolver.js';
import typeDefs from './schema/schema.js';

/* load schema & resolver */
const app = express();

/* connect mongoose */
mongoose
  .connect(
    'mongodb+srv://hungdang02042003:ehxKvBZ7aMrAok8s@tutorial-graphql.hwmyguy.mongodb.net/',
    // 'mongodb://127.0.0.1:27017/tutorial-graphql',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

// hungdang02042003 - ehxKvBZ7aMrAok8s

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ bookController }),
});

async function startApolloServer() {
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer().catch((err) => console.log(err));
