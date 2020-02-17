import { Module } from '@nestjs/common';
import { DatabaseService } from './service/databaseService';
import { ConfigurationModule } from '../configuration/configurationModule';

@Module({
  imports: [ConfigurationModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
