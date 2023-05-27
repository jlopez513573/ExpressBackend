export enum ValidationErrorMessages {
  DEFAULT = 'Error',
  EMPTY_PROPERTIES = 'Empty properties for object',
  TARGET_DATE_OUT_OF_RANGE = 'Target date is outside your Trajectory, please select another.',
}

class ErrorHandler extends Error {
  params: Record<string, any> = {};

  constructor(message: string, params: Record<string, any>) {
    super(message);
    this.name = 'ErrorHandler';
    this.params = params;
  }
}

export default ErrorHandler;
