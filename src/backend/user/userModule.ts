import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/databaseModule';
import { UserService } from './service/userService';
import { UserController } from './controller/userController';
import { CryptoModule } from '../crypto/cryptoModule';

@Module({
  imports: [forwardRef(() => DatabaseModule), CryptoModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
