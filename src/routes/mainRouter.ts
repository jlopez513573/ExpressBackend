import express from 'express';

import apiV1Router from './apiV1Router';

const mainRouter = express.Router();

// For Health checks
mainRouter.get('/', (_, res) => {
  res.send('Hello, I am up and running!');
});

mainRouter.use('/api/v1/', apiV1Router);

export default mainRouter;
