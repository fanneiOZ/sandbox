import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import { ConfigurationService } from 'src/backend/configuration/service/configurationService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(ConfigurationService).resolve('application');
  await app.listen(appConfig.port);
}
bootstrap();
