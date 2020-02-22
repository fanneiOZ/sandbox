import { ConfigurationInterface } from './configurationInterface';
import { JwtModuleOptions } from '@nestjs/jwt';
import { StrategyOptions } from 'passport-google-oauth20';

export class SecurityConfig implements ConfigurationInterface {
  public name: 'security';
  constructor(
    readonly encryptedKey: string,
    readonly jwtModuleOptions: JwtModuleOptions,
    readonly googleOptions: StrategyOptions,
  ) {}
}
