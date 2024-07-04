const express = require('express');
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RestaurantResolver } from '../../models/restaurants/restaurants.resolver';
import { Request, Response } from 'express';

async function createGraphQLRestaurantsRouter() {
  const restaurantsRouter = express.Router();

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
