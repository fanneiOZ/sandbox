import { Module } from '@nestjs/common';
import { ProductModule } from './modules/app.product.module';
import { ConfigurationModule } from './modules/app.config.module';

@Module({
  imports: [
    ProductModule,
    ConfigurationModule
  ]
})
export class AppModule {}
