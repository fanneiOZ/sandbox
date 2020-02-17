import { ConfigurationInterface } from './configurationInterface';

export class SecurityConfig implements ConfigurationInterface {
  public name = 'security';
  constructor(readonly secretKey: string) {}
}
