import { ConfigurationService } from '../../configuration/service/configurationService';
import { SecurityConfig } from '../../configuration/interface/securityConfig';
import { Injectable } from '@nestjs/common';
import { JwtModuleOptions } from '@nestjs/jwt';

@Injectable()
export class SecretKeyProvider {
  public readonly jwtModuleOptions: JwtModuleOptions;

  constructor(readonly configService: ConfigurationService) {
    this.jwtModuleOptions = (configService.resolve('security') as SecurityConfig).jwtModuleOptions;
  }
}
