require('dotenv').config();
import { Pool } from 'pg';
import { Options, Sequelize } from 'sequelize';

const connectionOptions: Options = {
  dialect: 'postgres',
  host: process.env.PG_HOST as string,
  username: process.env.PG_USER as string,
  port: parseInt(process.env.PG_PORT as string),
  password: process.env.PG_PASSWORD as string,
  database: process.env.PG_DB as string,
};

const postgresqlSeq = new Sequelize(connectionOptions);

export default postgresqlSeq;
