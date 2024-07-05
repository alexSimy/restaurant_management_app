const express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RestaurantResolver } from '../../models/restaurants/restaurants.resolver';
import { Request, Response } from 'express';
import { getUserByToken } from '../../models/users/users.model';

async function createGraphQLRestaurantsRouter() {
  const restaurantsRouter = express.Router();

  restaurantsRouter.use(
    async (req: Request, res: Response, next: (err?: Error) => any) => {
      const authheader = req.headers.authorization;
      const dbUser = authheader ? await getUserByToken(authheader) : null;
      const hasRights =
        authheader && dbUser ? authheader === dbUser.token : false;
      console.log('HERE', authheader);
      if (!authheader || !dbUser || !hasRights) {
        let err = new Error('User not authenticated! You need to login!');
        return next(err);
      }
      next();
    }
  );

  const schema = await buildSchema({
    resolvers: [RestaurantResolver],
  });

  const apollo = new ApolloServer({
    schema: schema,
    introspection: true,
  });

  await apollo.start();
  apollo.applyMiddleware({ app: restaurantsRouter, path: '/graphql' });

  return restaurantsRouter;
}

export default createGraphQLRestaurantsRouter;
