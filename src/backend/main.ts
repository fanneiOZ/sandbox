import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import { ConfigurationService } from 'src/backend/modules/configuration/service/configurationService';
import { Config } from './modules/configuration/interface/configEnumerator';
import { AppConfig } from './modules/configuration/interface/appConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app
    .get(ConfigurationService)
    .resolve(Config.application) as AppConfig;
  await app.listen(appConfig.port);
}
bootstrap();
