require('dotenv').config();
import { Pool } from 'pg';

const connectionOptions = {
  host: process.env.PG_HOST as string,
  user: process.env.PG_USER as string,
  port: parseInt(process.env.PG_PORT as string),
  password: process.env.PG_PASSWORD as string,
  database: process.env.PG_DB as string,
};

const pool = new Pool(connectionOptions);

export default pool;
