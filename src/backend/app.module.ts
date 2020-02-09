import { Module } from '@nestjs/common';
import { ProductModule } from './Modules/Product/ProductModule';
import { ConfigurationModule } from './Modules/Configuration/ConfigurationModule';
import { DatabaseModule } from './Modules/Database/DatabaseModule';

@Module({
  imports: [
    ProductModule,
    ConfigurationModule,
    DatabaseModule
  ]
})
export class AppModule {}
