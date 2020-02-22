import { ConfigService } from '@nestjs/config';
import { DbConfig } from '../interface/dbConfig';
import { Injectable } from '@nestjs/common';
import {
  ConfigurationInterface,
  configurationName,
} from '../interface/configurationInterface';
import { AppConfig } from '../interface/appConfig';
import { SecurityConfig } from '../interface/securityConfig';
import { CacheConfig } from '../interface/cacheConfig';
import { JwtModuleOptions } from '@nestjs/jwt';
import { HttpConfig } from '../interface/httpConfig';

@Injectable()
export class ConfigurationService extends ConfigService {
  constructor(internalConfig?: Record<string, any>) {
    super(internalConfig);
  }

  public resolve(
    name: configurationName,
  ): any {
    switch (name) {
      case 'application':
        return this.getApplicationConfig();
      case 'db':
        return this.getDbConfig();
      case 'security':
        return this.getSecurityConfig();
      case 'cache':
        return this.getCacheConfig();
      case 'http':
        return new HttpConfig();
      default:
        throw new Error('Configuration not found');
    }
  }

  private getApplicationConfig(): AppConfig {
    return new AppConfig(this.get('application.port'));
  }

  private getDbConfig(): DbConfig {
    return new DbConfig(
      this.get('DB_HOST'),
      this.get('DB_PORT') as number,
      this.get('DB_NAME'),
      this.get('DB_USER'),
      this.get('DB_PASSWORD'),
    );
  }

  private getSecurityConfig(): SecurityConfig {
    const defaultOptions = this.get('jwt.default.signOptions.expiresIn')
      ? { expiresIn: this.get('jwt.default.signOptions.expiresIn') }
      : null;
    const jwt: JwtModuleOptions = {
      secret: this.get('jwt.secretKey'),
      signOptions: defaultOptions,
    };
    return new SecurityConfig(this.get('crypto.secretKey'), jwt);
  }

  private getCacheConfig(): CacheConfig {
    return new CacheConfig(
      this.get('redis.host'),
      this.get('redis.port') as number,
    );
  }
}
