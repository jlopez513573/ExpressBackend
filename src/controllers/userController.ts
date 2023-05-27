import { Request, Response } from 'express';

import User from '../models/userModel';
import { APIErrorMessages } from '../types/commonTypes';
import apiResponseSender from '../utils/apiResponseSender';

export default {
  async getUser(req: Request, res: Response) {
    const { userId } = req.params;
    if (!userId) {
      apiResponseSender.missingParameter(res, { userId });
      return;
    }
    const user = await User.findById(userId);
    if (!user) {
      apiResponseSender.notFound(res, { userId }, APIErrorMessages.USER_NOT_FOUND);
      return;
    }
    apiResponseSender.successful(res, user);
  },
  async getUserScenario(req: Request, res: Response) {
    const { userId, scenarioId } = req.params;
    if (!userId || !scenarioId) {
      apiResponseSender.missingParameter(res, { userId, scenarioId });
      return;
    }
    const user = await User.findById(userId);
    if (!user) {
      apiResponseSender.notFound(res, { userId }, APIErrorMessages.USER_NOT_FOUND);
      return;
    }
    const scenario = user.scenariosMap[scenarioId];
    if (!scenario) {
      apiResponseSender.notFound(res, { scenarioId }, APIErrorMessages.SCENARIO_NOT_FOUND);
      return;
    }
    apiResponseSender.successful(res, scenario);
  },
  async getUserScenarios(req: Request, res: Response) {
    const { userId } = req.params;
    if (!userId) {
      apiResponseSender.missingParameter(res, { userId });
      return;
    }
    const user = await User.findById(userId);
    if (!user) {
      apiResponseSender.notFound(res, { userId }, APIErrorMessages.USER_NOT_FOUND);
      return;
    }
    apiResponseSender.successful(res, user.scenariosMap);
  },
};
