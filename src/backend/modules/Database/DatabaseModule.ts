import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './databaseService';
import { AppConfigService } from 'src/backend/modules/configuration/service/configurationService';


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