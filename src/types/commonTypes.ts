export interface RequestAuthResponse {
  isRequestAuthorized: boolean;
  message?: APIErrorMessages;
  params?: any;
}

export enum APIErrorMessages {
  NOT_FOUND = 'Entity not found!',
  MISSING_PARAMETER = 'Missing parameter!',
  USER_NOT_FOUND = 'User not found!',
  SCENARIO_NOT_FOUND = 'Scenario not found!',
  GENERIC_ERROR_MESSAGE = 'Something happened, please try again!',
  NOT_AUTHORIZED = 'User not authorized!',
  JAVA_BACKEND_URL_ERROR = 'Java Backend URL does not exist on the environment!',
}
