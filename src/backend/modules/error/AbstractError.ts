import { sprintf } from 'sprintf-js';
import { ErrorOptionsInterface } from './errorOptionsInterface';

export abstract class AbstractError extends Error {
  constructor(errorName: string, errorOptions?: ErrorOptionsInterface) {
    super();
    this.name = errorName;
    this.message = sprintf(
      '%s %s%s',
      this.name,
      errorOptions.logData
        ? sprintf('(data: %s)', JSON.stringify(errorOptions.data))
        : '',
      errorOptions.logStack ? sprintf('\nStack: %s', this.stack) : '',
    );
  }
}
