import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/productModule';
import { ConfigurationModule } from './modules/configuration/configurationModule';
import { DatabaseModule } from './modules/database/databaseModule';

@Module({
  imports: [ProductModule, ConfigurationModule, DatabaseModule],
})
export class AppModule {}
