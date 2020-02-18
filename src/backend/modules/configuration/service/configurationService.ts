import { ConfigService } from '@nestjs/config';
import { DbConfig } from '../interface/dbConfig';
import { Injectable } from '@nestjs/common';
import { ConfigurationInterface } from '../interface/configurationInterface';
import { Config } from '../interface/configEnumerator';
import { AppConfig } from '../interface/appConfig';
import { SecurityConfig } from '../interface/securityConfig';
import { CacheConfig } from '../interface/cacheConfig';

@Injectable()
export class ConfigurationService extends ConfigService {
  constructor(internalConfig?: Record<string, any>) {
    super(internalConfig);
  }

  public resolve(name: string): ConfigurationInterface {
    switch (name) {
      case Config.APPLICATION.toString():
        return this.getApplicationConfig();
      case Config.DB.toString():
        return this.getDbConfig();
      case Config.SECURITY.toString():
        return this.getSecurityConfig();
      case Config.CACHE.toString():
        return this.getCacheConfig();
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
    const jwt = {
      secretKey: this.get('jwt.secretKey'),
      defaultOptions: defaultOptions,
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
