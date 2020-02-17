import { Injectable } from '@nestjs/common';
import { ConfigurationService } from '../../configuration/service/configurationService';
import { SequelizeAdaptor } from '../adaptor/sequelize/sequelizeAdaptor';
import { OrmAdaptorInterface } from '../adaptor/ormAdaptorInterface';

@Injectable()
export class DatabaseService {
  protected dbAdaptor: OrmAdaptorInterface;

  constructor(protected readonly configService: ConfigurationService) {
    this.dbAdaptor = new SequelizeAdaptor(configService);
    this.dbAdaptor.connectDatabase();
    this.dbAdaptor.initialize();
  }
}
