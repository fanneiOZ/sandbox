import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../configuration/ConfigurationService';
import { SequelizeAdaptor } from './adaptors/SequelizeAdaptor';
import { OrmAdaptorInterface } from './adaptors/OrmAdaptorInterface';


@Injectable()
export class DatabaseService {    
    protected dbAdaptor: OrmAdaptorInterface;
    
    constructor (protected readonly configService: AppConfigService) {
        this.dbAdaptor = new SequelizeAdaptor(configService);
        this.dbAdaptor.connectDatabase();
    }
}