import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../Configuration/Service/ConfigurationService';
import { SequelizeAdaptor } from './adaptors/sequelize/sequelizeAdaptor';
import { OrmAdaptorInterface } from './adaptors/ormAdaptorInterface';


@Injectable()
export class DatabaseService {    
    protected dbAdaptor: OrmAdaptorInterface;
    
    constructor (protected readonly configService: AppConfigService) {
        this.dbAdaptor = new SequelizeAdaptor(configService);
        this.dbAdaptor.connectDatabase();
        this.dbAdaptor.initialize();
    }
}