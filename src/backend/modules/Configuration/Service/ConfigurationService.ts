import { ConfigService } from '@nestjs/config';
import { DbConfig } from '../interface/dbConfig';

export class AppConfigService extends ConfigService {
  public appPort: string;

  protected dbConfig: DbConfig;

  constructor(internalConfig?: Record<string, any>) {
    super(internalConfig);
    this.appPort = this.get('PORT');
    this.setUpDatabase();
  }

  setUpDatabase(): void {
    this.dbConfig = new DbConfig(
      this.get('DB_HOST'),
      this.get('DB_PORT') as number,
      this.get('DB_NAME'),
      this.get('DB_USER'),
      this.get('DB_PASSWORD'),
    );
  }

  getDbConfig(): DbConfig {
    return this.dbConfig;
  }
}
