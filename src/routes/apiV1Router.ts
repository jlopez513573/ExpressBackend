import express from 'express';

import userRouter from './userRouter';

const apiV1Router = express.Router();

apiV1Router.use(userRouter);

export default apiV1Router;
