import { ConfigurationInterface } from './configurationInterface';
import { JwtModuleOptions } from '@nestjs/jwt';

export class SecurityConfig implements ConfigurationInterface {
  public name: 'security';
  constructor(
    readonly encryptedKey: string,
    readonly jwtModuleOptions: JwtModuleOptions
  ) {}
}
