import { ConfigService } from '@nestjs/config';
import { DbConfig } from '../interface/dbConfig';
import { Injectable } from '@nestjs/common';
import { ConfigurationInterface } from '../interface/configurationInterface';
import { Config } from '../interface/configEnumerator';
import { AppConfig } from '../interface/appConfig';

@Injectable()
export class ConfigurationService extends ConfigService {
  constructor(internalConfig?: Record<string, any>) {
    super(internalConfig);
  }

  public resolve(name: Config): ConfigurationInterface {
    switch (name) {
      case Config.application:
        return this.getApplicationConfig();
      case Config.db:
        return this.getDbConfig();
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
}
