import { Method } from 'axios';

export class ApiTemplate {
  public static mimeType = {
    json: 'application/json',
    'x-www-form-urlencoded': 'application/x-www-form-urlencoded',
  };

  constructor(
    readonly method: Method,
    readonly route: string,
    readonly contentType?: string,
  ) {}
}
