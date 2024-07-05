import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import createAPIRouter from './routes/api';

async function createExpressApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.CORS_FRONT_END,
    })
  );

  app.use(morgan('short'));
  app.use(express.json());

  const api = await createAPIRouter();
  app.use('/api/v1', api);

  app.use((error: Error, req: Request, res: Response, next: () => any) => {
    console.log(error);
    res.status(401).json({ ok: false, message: error.message });
  });
  return app;
}
export default createExpressApp;
