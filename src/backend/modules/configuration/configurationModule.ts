import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationService } from './service/configurationService';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './config/.application.env',      
      isGlobal: true,
      expandVariables: true,
    }),
    ConfigModule.forRoot({
      envFilePath: './config/.dev.env',
      isGlobal: true,
      ignoreEnvVars: false,
    })
  ],
  providers: [ConfigurationService],
  exports: [ConfigurationService]
})
export class ConfigurationModule {}
