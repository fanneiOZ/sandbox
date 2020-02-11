import { Sequelize } from 'src/backend/Modules/Database/adaptors/sequelize/node_modules/sequelize';
import { OrmAdaptorInterface } from '../ormAdaptorInterface';
import { AppConfigService } from 'src/backend/Modules/Configuration/Service/ConfigurationService';

import { Product } from 'src/backend/Modules/product/entity/product';

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
    
    public connectDatabase() {
        this.adaptor.authenticate()
            .then(() => {
                console.log('Database connected: ', [ this.adaptor.config ]);
            })
            .catch(e => {
                console.error(e.name);
                console.error(this.adaptor);
            });
    }

    public initialize() {
        Product.init(Product.modelAttributes, {sequelize: this.adaptor, tableName: Product.tableName});
    }
}