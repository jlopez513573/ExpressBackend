import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application /* NextFunction, Request, Response */ } from 'express';
import mongoose from 'mongoose';

import mainRouter from './routes/mainRouter';
/* import { RequestAuthResponse } from './types/commonTypes';
import apiResponseSender from './utils/apiResponseSender';
import isRequestAutorized from './utils/requestAuth'; */

dotenv.config();

const createServer = (): Application => {
  const app: Application = express();

  const NODE_ENV: string = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'dev';

  mongoose.connect(process.env.MONGODB_URI || '', { dbName: 'trajectory_db' });
  mongoose.set('debug', NODE_ENV === 'dev');

  app.use(cors({ origin: '*' }));
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: 1000000000 }));
  app.use(bodyParser.urlencoded({ limit: 1000000000, extended: true }));

  // TODO we need to implement authorization in a different way
  // Authenticate user cookie with PLAY_SESION cookie
  /* app.use(async (req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const playSession = req.cookies['PLAY_SESSION'];
    console.log({ playSession });

    const { isRequestAuthorized, message, params }: RequestAuthResponse = await isRequestAutorized(playSession);
    if (!isRequestAuthorized) {
      apiResponseSender.notAllowed(res, params, message);
      return;
    }
    next();
  }); */

  app.use(mainRouter);

  return app;
};

export default createServer;
