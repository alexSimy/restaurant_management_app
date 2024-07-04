import express from 'express';
import createGraphQLRestaurantsRouter from './restaurants/restaurants.router';
import usersRouter from './users/users.router';

async function createAPIRouter() {
  const api = express.Router();

  const restaurantsRouter = await createGraphQLRestaurantsRouter();
  api.use('/restaurants', restaurantsRouter);

  api.use('/users', usersRouter);

  return api;
}
export default createAPIRouter;
