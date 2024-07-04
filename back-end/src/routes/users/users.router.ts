import express from 'express';
import {
  httpCreateUser,
  httpGetUser,
  httpGetUserByToken,
} from './users.controller';

const usersRouter = express.Router();

usersRouter.post('/', httpGetUserByToken);
usersRouter.post('/login', httpGetUser);
usersRouter.post('/register', httpCreateUser);

export default usersRouter;
