import { Module } from '@nestjs/common';
import { ProductModule } from './product/productModule';
import { ConfigurationModule } from './configuration/configurationModule';
import { DatabaseModule } from './database/databaseModule';
import { CryptoModule } from './crypto/cryptoModule';
import { QueueModule } from './queue/queueModule';
import { UserModule } from './user/userModule';
import { AuthenticationModule } from './authentication/authenticationModule';

@Module({
  imports: [
    ProductModule,
    ConfigurationModule,
    DatabaseModule,
    CryptoModule,
    QueueModule,
    UserModule,
    AuthenticationModule,
  ],
})
export class AppModule {}
