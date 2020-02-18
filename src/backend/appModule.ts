import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/productModule';
import { ConfigurationModule } from './modules/configuration/configurationModule';
import { DatabaseModule } from './modules/database/databaseModule';
import { CryptoModule } from './modules/crypto/cryptoModule';
import { QueueModule } from './modules/queue/queueModule';
import { UserModule } from './modules/user/userModule';

@Module({
  imports: [
    ProductModule,
    ConfigurationModule,
    DatabaseModule,
    CryptoModule,
    QueueModule,
    UserModule
  ],
})
export class AppModule {}
