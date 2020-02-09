import { ProductInterface } from './ProductInterface';
import { AbstractModel } from '../../database/adaptors/sequelize/AbstractModel';
import { DataTypes } from 'sequelize';

export class Product extends AbstractModel implements ProductInterface {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static tableName = 'products';
    public static modelAttributes = {
        id: {        
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(255),
            allowNull: false
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE
        }
    };

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
    
    setName(name: string): ProductInterface {
        this.name = name;
        return this;
    }
}