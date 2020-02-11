import { NestFactory } from '@nestjs/core';
import { AppModule } from './appModule';
import { AppConfigService } from 'src/backend/modules/configuration/service/configurationService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);  

  await app.listen(configService.appPort);
}
bootstrap();
