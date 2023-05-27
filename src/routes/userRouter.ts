import express from 'express';

import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/user/:userId', userController.getUser);
userRouter.get('/user/:userId/scenario/:scenarioId', userController.getUserScenario);
userRouter.get('/user/:userId/scenarios', userController.getUserScenarios);

export default userRouter;
