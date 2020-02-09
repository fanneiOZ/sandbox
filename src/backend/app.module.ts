import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product.module';
import { ConfigurationModule } from './modules/config.module';
import { DatabaseModule } from './modules/db.module';

@Module({
  imports: [
    ProductModule,
    ConfigurationModule,
    DatabaseModule
  ]
})
export class AppModule {}
