import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './providers/configuration/ConfigurationService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(AppConfigService);  

  await app.listen(configService.appPort);
}
bootstrap();
