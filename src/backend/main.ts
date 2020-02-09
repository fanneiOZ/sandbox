import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from 'src/backend/Modules/Configuration/Service/ConfigurationService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);  

  await app.listen(configService.appPort);
}
bootstrap();
