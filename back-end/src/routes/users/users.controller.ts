import { Request, Response } from 'express';
import {
  createUser,
  getUserByToken,
  getUserByUsername,
} from '../../models/users/users.model';
import { comparePassword, cryptPassword } from '../../utils/passwordManagement';

export async function httpGetUser(req: Request, res: Response) {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const resp = await getUserByUsername(username);
    if (!resp) {
      return res.status(404).json({ ok: false, message: 'User not found' });
    }
    if (await comparePassword(password, resp.password)) {
      return res.status(200).json(resp.token);
    }
    return res.status(404).json({ ok: false, message: 'User not found' });
  } catch (err) {
    console.log(`httpGetUser error: ${err}`);
    return res.status(404).json({ ok: false, message: 'User not found' });
  }
}

export async function httpGetUserByToken(req: Request, res: Response) {
  const { token } = req.body;
  try {
    const resp = await getUserByToken(token);
    console.log('here');
    if (!resp) {
      return res.status(404).json({ ok: false, message: 'Token not found' });
    }
    console.log(resp.username);
    if (token === resp.token && (await comparePassword(resp.username, token))) {
      return res.status(200).json(resp.token);
    }
    return res.status(404).json({ ok: false, message: 'Token not found' });
  } catch (err) {
    console.log(`httpGetUserByToken error: ${err}`);
    return res.status(404).json({ ok: false, message: 'Token not found' });
  }
}

export async function httpCreateUser(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const checkIfUserExistsUser = await getUserByUsername(username);
    if (checkIfUserExistsUser) {
      return res
        .status(409)
        .json({ ok: false, message: 'User already exists' });
    }
    const hashPassword = await cryptPassword(password);
    const token = await cryptPassword(username);
    const resp = await createUser(username, hashPassword, token);
    if (!resp) {
      return res
        .status(404)
        .json({ ok: false, message: 'User can not be created' });
    }
    return res.status(200).json(resp.token);
  } catch (err) {
    console.log(`httpGetUserByToken error: ${err}`);
    return res
      .status(404)
      .json({ ok: false, message: 'User can not be created' });
  }
}
