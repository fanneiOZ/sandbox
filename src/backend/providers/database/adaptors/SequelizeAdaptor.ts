import { Sequelize } from 'sequelize';
import { OrmAdaptorInterface } from './OrmAdaptorInterface';
import { AppConfigService } from '../../configuration/ConfigurationService';

export class SequelizeAdaptor implements OrmAdaptorInterface {
    protected adaptor: Sequelize;

    constructor(protected readonly configService: AppConfigService) {
        let dbConfig = configService.getDbConfig();
        this.adaptor = new Sequelize(
            dbConfig.name,
            dbConfig.username,
            dbConfig.password,
            {
                host: dbConfig.host,
                port: dbConfig.port,
                dialect: 'postgres',
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            }
        );
    }
    
    connectDatabase() {
        this.adaptor.authenticate()
        .catch(e => {
            console.error(e.name);
            console.error(this.adaptor);
        });
    }
}