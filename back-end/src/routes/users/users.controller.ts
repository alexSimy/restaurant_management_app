import { Request, Response } from 'express';
import {
  createUser,
  getUserByToken,
  getUserByUsername,
} from '../../models/users/users.model';
import { comparePassword, cryptPassword } from '../../utils/passwordManagement';
import { token } from 'morgan';

export async function httpGetUser(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const resp = await getUserByUsername(username);
    if (!resp) {
      return res.status(204);
    }
    if (await comparePassword(password, resp.password)) {
      res.status(200).json(resp.token);
    }
    return res.status(204);
  } catch (err) {
    console.log(`httpGetUserByToken error: ${err}`);
    res.status(204);
  }
}

export async function httpGetUserByToken(req: Request, res: Response) {
  const { token } = req.body;
  try {
    const resp = await getUserByToken(token);
    if (!resp) {
      return res.status(204);
    }
    console.log(resp.username);
    if (token === resp.token && (await comparePassword(resp.username, token))) {
      res.status(200).json(resp.token);
    }
    return res.status(204);
  } catch (err) {
    console.log(`httpGetUserByToken error: ${err}`);
    res.status(204);
  }
}

export async function httpCreateUser(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const hashPassword = await cryptPassword(password);
    const token = await cryptPassword(username);
    const resp = await createUser(username, hashPassword, token);
    if (!resp) {
      return res.status(204);
    }
    res.status(200).json(resp.token);
  } catch (err) {
    console.log(`httpGetUserByToken error: ${err}`);
    res.status(204);
  }
}
