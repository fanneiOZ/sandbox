import { Module } from '@nestjs/common';
import { DatabaseService } from '../providers/database/DatabaseService';

import { AppConfigService } from '../providers/configuration/ConfigurationService';
import { ConfigModule } from '@nestjs/config';

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