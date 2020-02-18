import { ConfigurationInterface } from './configurationInterface';

export class SecurityConfig implements ConfigurationInterface {
  public name = 'security';
  constructor(
    readonly encryptedKey: string,
    readonly jwt: {
      secretKey: string;
      defaultOptions?: { expiresIn?: string };
    },
  ) {}
}
