import { Module, forwardRef } from '@nestjs/common';
import { DatabaseModule } from '../database/databaseModule';
import { UserService } from './service/userService';

@Module({
  imports: [forwardRef(() => DatabaseModule)],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
