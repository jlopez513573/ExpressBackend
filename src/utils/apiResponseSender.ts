import { Response } from 'express';

import { APIErrorMessages } from '../types/commonTypes';

const successful = <T>(res: Response, data: T): void => {
  res.status(200).send(data);
};

const error = <T, Q>(res: Response, requestParams?: T, errorMsg?: unknown, params?: Q, stack?: any): void => {
  res.status(400).send({
    error: errorMsg || APIErrorMessages.GENERIC_ERROR_MESSAGE,
    requestParams,
    params,
    stack,
  });
};

const notAllowed = <T>(res: Response, params?: T, errorMsg?: APIErrorMessages): void => {
  res.status(401).send({ error: errorMsg || APIErrorMessages.NOT_AUTHORIZED, params });
};

const notFound = <T>(res: Response, params?: T, errorMsg?: APIErrorMessages): void => {
  res.status(404).send({ error: errorMsg || APIErrorMessages.NOT_FOUND, params });
};

const missingParameter = <T>(res: Response, params?: T, errorMsg?: APIErrorMessages): void => {
  res.status(422).send({ error: errorMsg || APIErrorMessages.MISSING_PARAMETER, params });
};

export default {
  successful,
  error,
  notAllowed,
  notFound,
  missingParameter,
};
