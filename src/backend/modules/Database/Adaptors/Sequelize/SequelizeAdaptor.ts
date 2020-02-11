import { Sequelize } from 'sequelize';
import { OrmAdaptorInterface } from '../ormAdaptorInterface';
import { AppConfigService } from 'src/backend/modules/configuration/service/configurationService';
import { Product } from 'src/backend/modules/product/entity/product';
import { ProductCategory } from 'src/backend/modules/product/entity/productCategory';

export class SequelizeAdaptor implements OrmAdaptorInterface {

    protected adaptor: Sequelize;

    constructor(protected readonly configService: AppConfigService) {
        const dbConfig = configService.getDbConfig();
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
                console.log('Database connected.');
            })
            .catch(e => {
                console.error(e.name);
                console.error(this.adaptor);
            });
    }

    public initialize() {
        Product.init(Product.modelAttributes, {sequelize: this.adaptor, tableName: Product.tableName});
        ProductCategory.init(
            ProductCategory.modelAttributes,
            {sequelize: this.adaptor, tableName: ProductCategory.tableName}
        );
        
        ProductCategory.associateModel();
        Product.associateModel();        
    }
}