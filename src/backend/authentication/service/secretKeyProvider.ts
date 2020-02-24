import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../../configuration/service/configurationService';
import { JwtModuleOptions } from '@nestjs/jwt';
import { StrategyOptions as GoogleOptions } from 'passport-google-oauth20';

@Injectable()
export class SecretKeyProvider {
  public readonly jwtModuleOptions: JwtModuleOptions;
  public readonly googleOptions: GoogleOptions;

  constructor(readonly configService: ConfigurationService) {
    this.jwtModuleOptions = configService.resolve('security').jwtModuleOptions;
    this.googleOptions = configService.resolve('security').googleOptions;
  }
}
