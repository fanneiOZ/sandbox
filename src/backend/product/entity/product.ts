import { ProductInterface } from './productInterface';
import { AbstractModel } from '../../database/adaptor/sequelize/abstractModel';
import { DataTypes } from 'sequelize';
import { ProductCategory } from './productCategory';
import { Dinero as Money } from 'dinero.js';
import MoneyFactory = require('dinero.js');

export class Product extends AbstractModel implements ProductInterface {
  public id!: number;
  public name!: string;
  public active!: boolean;
  public productNumber!: string;
  public listingPrice!: Money;
  private readonly createdAt!: Date;
  private readonly updatedAt!: Date;

  public static readonly tableName = 'products';
  public static readonly modelAttributes = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      get() {
        return this.getDataValue('id');
      },
    },
    name: {
      type: new DataTypes.STRING(255),
      allowNull: false,
      get() {
        return this.getDataValue('name');
      },
      set(value: string) {
        this.setDataValue('name', value);
      },
    },
    listingPrice: {
      field: 'listing_price',
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: { amount: 0, currency: 'THB' },
      get() {
        return MoneyFactory(this.getDataValue('listingPrice'));
      },
      set(value: Money) {
        this.setDataValue('listingPrice', value);
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      set(value: boolean) {
        this.setDataValue('active', value);
      },
    },
    productNumber: {
      field: 'product_number',
      type: new DataTypes.STRING(30),
      allowNull: false,
      get() {
        return this.getDataValue('productNumber');
      },
      set(value: string) {
        this.setDataValue('productNumber', value);
      },
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
    categoryId: {
      field: 'category_id',
      references: {
        model: 'ProductCategories',
      },
      type: DataTypes.INTEGER,
    },
  };

  public static associateModel(): void {
    Product.belongsTo(ProductCategory, { foreignKey: 'categoryId' });
  }

  public isActive(): boolean {
    return this.active;
  }
}
