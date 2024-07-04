const express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RestaurantResolver } from '../../models/restaurants/restaurants.resolver';
import { Request, Response } from 'express';

// init graphsql and apolo server

async function createGraphQLRestaurantsRouter() {
  const restaurantsRouter = express.Router();

  // setting up apollo server
  const schema = await buildSchema({
    resolvers: [RestaurantResolver],
  });

  const apollo = new ApolloServer({
    schema: schema,
    introspection: true,
  });

  restaurantsRouter.use((req: Request, res: Response, next: () => any) => {
    console.log('/api/v1/restaurants works'), next();
  });

  await apollo.start();
  apollo.applyMiddleware({ app: restaurantsRouter, path: '/graphql' });

  return restaurantsRouter;
}

export default createGraphQLRestaurantsRouter;
