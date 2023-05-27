import axios, { AxiosRequestConfig } from 'axios';

import { APIErrorMessages, RequestAuthResponse } from '../types/commonTypes';

const isRequestAutorized = async (sessionCookie: string): Promise<RequestAuthResponse> => {
  const backendUrl = process.env.JAVA_BACKEND_URL || '';
  if (backendUrl === '') {
    return { isRequestAuthorized: false, message: APIErrorMessages.JAVA_BACKEND_URL_ERROR };
  }

  const options: AxiosRequestConfig = {
    headers: {
      Accept: '*/*',
      cookie: `PLAY_SESSION=${sessionCookie}`,
    },
  };
  const response: RequestAuthResponse = await axios
    .get(`${backendUrl}/isAuthenticated`, options)
    .then((): RequestAuthResponse => ({ isRequestAuthorized: true }))
    .catch((err): RequestAuthResponse => {
      console.log({ err: err.request });

      return { isRequestAuthorized: false, message: APIErrorMessages.NOT_AUTHORIZED, params: err };
    });

  return response;
};
export default isRequestAutorized;
