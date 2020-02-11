import { ProductInterface } from './productInterface';
import { AbstractModel } from 'src/backend/modules/database/adaptors/sequelize/abstractModel';
import { DataTypes } from 'sequelize';
import { ProductCategory } from './productCategory';

export class Product extends AbstractModel implements ProductInterface {
  protected id!: number;
  protected name!: string;
  protected active!: boolean;
  protected productNumber!: string;
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
      references: { model: 'ProductCategories' },
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
