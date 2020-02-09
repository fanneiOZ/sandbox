import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './DatabaseService';

import { AppConfigService } from 'src/backend/Modules/Configuration/Service/ConfigurationService';


@Module({
    imports: [        
        ConfigModule.forRoot({
            envFilePath: './config/.dev.env',
            isGlobal: true,
            ignoreEnvVars: false
        }),
    ],
    providers: [
        AppConfigService,
        DatabaseService
    ]
})
export class DatabaseModule  {}