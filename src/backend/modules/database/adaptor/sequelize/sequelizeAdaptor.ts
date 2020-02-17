import { Sequelize, InitOptions } from 'sequelize';
import { OrmAdaptorInterface } from '../ormAdaptorInterface';
import { ConfigurationService } from 'src/backend/modules/configuration/service/configurationService';
import { Product } from 'src/backend/modules/product/entity/product';
import { ProductCategory } from 'src/backend/modules/product/entity/productCategory';
import { Config } from 'src/backend/modules/configuration/interface/configEnumerator';
import { DbConfig } from 'src/backend/modules/configuration/interface/dbConfig';

export class SequelizeAdaptor implements OrmAdaptorInterface {
  protected adaptor: Sequelize;

  constructor(protected readonly configService: ConfigurationService) {
    const dbConfig = configService.resolve(Config.db) as DbConfig;
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
          idle: 10000,
        },
      },
    );
  }

  public connectDatabase(): void {
    this.adaptor
      .authenticate()
      .then(() => {
        console.log('Database connected.');
      })
      .catch(e => {
        console.error(e.name);
        console.error(this.adaptor);
      });
  }

  public initialize(): void {
    Product.init(
      Product.modelAttributes,
      this.getInitOptions(Product.tableName),
    );
    ProductCategory.init(
      ProductCategory.modelAttributes,
      this.getInitOptions(ProductCategory.tableName),
    );

    [ProductCategory, Product].forEach(model => {
      model.associateModel();
    });
  }

  private getInitOptions(tableName: string): InitOptions {
    return {
      sequelize: this.adaptor,
      tableName: tableName,
    };
  }
}
