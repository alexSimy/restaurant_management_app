require('dotenv').config();

import http from 'node:http';
import createExpressApp from './app';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // insert 100 randomly generated restaurants in the database here

  const app = await createExpressApp();
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server started on ${PORT}.`);
  });
};

startServer();
