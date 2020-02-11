import { AbstractModel } from "../../database/adaptors/sequelize/abstractModel";
import { DataTypes } from "sequelize";
import { Product } from "./product";

export class ProductCategory extends AbstractModel {
  protected id!: number;
  protected code!: string;
  protected label!: string;  

  public static readonly tableName = 'product_categories';
  public static readonly modelAttributes = {    
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        field: 'category_code',
        type: new DataTypes.STRING(20),
        allowNull: false,
        get() {return this.getDataValue('code')}        
      },
      label: {
        type: new DataTypes.STRING(50),
        allowNull: false,
        get() {return this.getDataValue('label')},
        set(value) {this.setDataValue('label', value)}
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
      }
    };
  
    public static associateModel(): void {
      ProductCategory.hasMany(Product, {
        as: 'Product',
        onDelete: 'RESTRICT',
        foreignKey: {name: 'categoryId', allowNull: true}
      });
    };
}