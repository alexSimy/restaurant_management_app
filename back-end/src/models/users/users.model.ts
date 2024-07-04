import { SequelizeScopeError } from 'sequelize';
import users from './users.sequalize';

export type User = {
  id: number;
  username: string;
  password: string;
  token: string;
};

export async function getUser(
  username: string,
  password: string
): Promise<User | null> {
  const foundRecord = await users.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  if (!foundRecord) {
    return null;
  }
  return foundRecord;
}

export async function getUserByUsername(
  username: string
): Promise<User | null> {
  const foundRecord = await users.findOne({
    where: {
      username: username,
    },
  });

  if (!foundRecord) {
    return null;
  }
  return foundRecord;
}

export async function getUserByToken(token: string): Promise<User | null> {
  const foundRecord = await users.findOne({
    where: {
      token: token,
    },
  });

  if (!foundRecord) {
    return null;
  }
  return foundRecord;
}

export async function createUser(
  username: string,
  password: string,
  token: string
): Promise<User> {
  const createdRecord = await users.create({
    username: username,
    password: password,
    token: token,
  });
  if (!createdRecord) {
    throw new SequelizeScopeError(`Error when creating the user!`);
  }

  return createdRecord;
}
