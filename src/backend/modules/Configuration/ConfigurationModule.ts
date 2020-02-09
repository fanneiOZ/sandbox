import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './Service/ConfigurationService';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: './config/.application.env',
            isGlobal: true,
            expandVariables: true
        })
    ],
    providers: [
        AppConfigService
    ]
})
export class ConfigurationModule {}