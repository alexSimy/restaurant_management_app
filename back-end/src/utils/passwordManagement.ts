import * as bcrypt from 'bcrypt';

export async function cryptPassword(password: string) {
  return bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) => hash);
}

export async function comparePassword(password: string, hashPassword: string) {
  return bcrypt.compare(password, hashPassword).then((resp) => resp);
}
